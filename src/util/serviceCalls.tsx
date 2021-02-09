import { getAxiosInstance } from './axiosConfig';
import { credentials, newUser, user } from '../types';
import { AxiosResponse } from 'axios';

export const login = async (creds: credentials) => {
   return await getAxiosInstance().post('/login', creds)
      .then(res => {
         if (res.status === 200) {
            const user: user = {id: res.data.id, username: res.data.username, email: res.data.email};
            const token = res.headers.tokenid;
            localStorage.setItem("tokenId", JSON.stringify(token));
            localStorage.setItem("user", JSON.stringify(user));
            return {res, user};
         }
      })
}

export const logout = () => {
   localStorage.removeItem("user");
   localStorage.removeItem("tokenId");
}

export const signUp = async (newUser: newUser) => {
   return await getAxiosInstance().post('/systemuser', newUser)
      .then(res => {
         if (res.status === 201) {
            const creds: credentials = {username: res.data.username, password: newUser.password}
            return login(creds);
         } 
      })
}