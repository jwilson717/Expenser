import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { LoginFormComponent } from '../components/loginFormComponent';
import { credentials } from '../types'

export const LoginPage = () => {
   const history = useHistory();
   const [state, setState] = useState<credentials>({username: "", password: ""});

   const handleSignUp = () => {
      history.push("/signup");
   }
   const handleLogin = (e: any) => {
      e.preventDefault();
      alert(`username: ${state.username} password: ${state.password}`);
   }

   return(
      <LoginFormComponent props={{handleSignUp, handleLogin, setState}} />
   );
}