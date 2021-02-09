import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { LoginFormComponent } from '../components/loginFormComponent';
import { credentials, user } from '../types'
import { useAuthContext } from '../util/authContext';
import { getAxiosInstance } from '../util/axiosConfig';

export const LoginPage = () => {
   const history = useHistory();
   const [state, setState] = useState<credentials>({username: "", password: ""});
   const context = useAuthContext();
   const [errorMsg, setErrorMsg] = useState<string>("");

   const handleSignUp = () => {
      history.push("/signup");
   }
   const handleLogin = (e: any) => {
      e.preventDefault();
      getAxiosInstance().post("/login", state)
         .then((res) => {
            if (res.status === 200) {
               const user: user = {id: res.data.id, username: res.data.username, email: res.data.email};
               const token = res.headers.tokenid;
               localStorage.setItem("tokenId", JSON.stringify(token));
               localStorage.setItem("user", JSON.stringify(user));
               context.setUser(user);
            }
         }).catch((e) => {
            if(e.response && e.response.status === 404) {
               setErrorMsg("Invalid Username");
            } else if (e.response && e.response.status === 400) {
               setErrorMsg("Incorrect Password");
            }
         })
   }

   if (context.user) {
      history.push("/dashboard");
   }

   return(
      <LoginFormComponent props={{handleSignUp, handleLogin, setState, errorMsg}} />
   );
}