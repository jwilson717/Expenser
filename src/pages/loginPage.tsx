import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { LoginFormComponent } from '../components/loginFormComponent';
import { credentials } from '../types'
import { useAuthContext } from '../util/authContext';
import { login } from '../util/serviceCalls';

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
      login(state)
         .then(res => {
            if(res?.user) {
               context.setUser(res.user);
            } 
         }). catch(e => {
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