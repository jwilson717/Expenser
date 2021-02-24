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

   const handleLogin = (e: any) => {
      e.preventDefault();
      if (state.username === "") {
         setErrorMsg("Please Provide a Username");
         return;
      } else if(state.password === "") {
         setErrorMsg("Please Provide a Password");
         return;
      }
      login(state)
         .then(res => {
            if(res?.user) {
               context.userDispatch({type: "LOGIN", user: {user: res.user}});
            } 
         }). catch(e => {
            if(e.response && e.response.status === 404) {
               setErrorMsg("Invalid Username");
            } else if (e.response && e.response.status === 400) {
               setErrorMsg("Incorrect Password");
            } else if (e.response && e.response.status === 500) {
               setErrorMsg("Unable to login");
            }
         })
   }

   if (context.user?.user) {
      history.push("/dashboard");
   }

   return(
      <LoginFormComponent props={{handleLogin, setState, errorMsg}} />
   );
}