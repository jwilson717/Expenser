import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { SignUpFormComponent } from '../components/signUpFormComponent';
import { newUser, user } from '../types';
import { useAuthContext } from '../util/authContext';
import { getAxiosInstance } from '../util/axiosConfig';

export const SignUpPage = () => {
   const [newUser, setNewUser] = useState<newUser>({firstName: "", lastName: "", email: "", username: "", password: "", confirmedPassword: ""});
   const [errorMsg, setErrorMsg] = useState<string>("");
   const history = useHistory();
   const context = useAuthContext();

   const handleSignUp = (e: any) => {
      e.preventDefault();
      if (newUser.password !== newUser.confirmedPassword) {
         setErrorMsg("Passwords do not match");
         return;
      }

      getAxiosInstance().post("/systemuser", newUser)
         .then((res) => {
            if (res.status === 201){
               const user: user = {id: res.data.id, username: res.data.username, email: res.data.email};
               context.setUser(user);
               localStorage.setItem("user", JSON.stringify(user));
               history.push("/dashboard");
            } else {
               setErrorMsg("Error Creating Account. Please try again later.");
            }
         }).catch((e) => {
            setErrorMsg("Error Creating Account. Please try again later.");
         });
   }

   return (
      <SignUpFormComponent props={{handleSignUp, errorMsg, setNewUser}}/>
   )
}