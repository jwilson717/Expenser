import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { SignUpFormComponent } from '../components/signUpFormComponent';
import { newUser } from '../types';
import { useAuthContext } from '../util/authContext';
import { signUp } from '../util/serviceCalls';

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

      signUp(newUser)
         .then(res => {
            if (res?.user) {
               context.setUser(res.user);
            }
         }).catch(e => {
            setErrorMsg('Error Creating account. Please try again later');
         })
   }

   if(context.user) {
      history.push('/dashboard');
   }

   return (
      <SignUpFormComponent props={{handleSignUp, errorMsg, setNewUser}}/>
   )
}