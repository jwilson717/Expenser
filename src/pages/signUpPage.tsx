import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { LoadingComponent } from '../components/loadingComponent';
import { SignUpFormComponent } from '../components/signUpFormComponent';
import { newUser } from '../types';
import { useAuthContext } from '../util/authContext';
import { signUp } from '../util/serviceCalls';

export const SignUpPage = () => {
   const [newUser, setNewUser] = useState<newUser>({firstName: "", lastName: "", email: "", username: "", password: "", confirmedPassword: ""});
   const [errorMsg, setErrorMsg] = useState<string>("");
   const [loading, setLoading] = useState<boolean>(false);
   const history = useHistory();
   const context = useAuthContext();

   const validate = () => {
      if (!newUser.firstName.match(/\w+/)) {
         setErrorMsg("Please provide a first name");
         return false;
      } 
      
      if (!newUser.lastName.match(/\w+/)) {
         setErrorMsg("Please provide a last name");
         return false;
      } 
      
      if (!newUser.email.match(/\w+/)) {
         setErrorMsg("Please provide an email");
         return false;
      } 
      
      if (!newUser.username.match(/\w+/)) {
         setErrorMsg("Please provide a username");
         return false;
      }

      if (!newUser.password.match(/\w+/)) {
         setErrorMsg("Please provide a password");
         return false;
      }

      if (!newUser.confirmedPassword.match(/\w+/)) {
         setErrorMsg("Please confirm your password");
         return false;
      }

      return true;
   }

   const handleSignUp = (e: any) => {
      e.preventDefault();
      setLoading(true);
      if (!validate()) {
         setLoading(false);
         return;
      }
      if (newUser.password !== newUser.confirmedPassword) {
         setErrorMsg("Passwords do not match");
         setLoading(false);
         return;
      }

      signUp(newUser)
         .then(res => {
            if (res?.user) {
               context.userDispatch({type: "LOGIN", user: {user: res.user}});
            }
            setLoading(false);
         }).catch(e => {
            setErrorMsg('Error Creating account. Please try again later');
            setLoading(false);
         })
   }
   if (context.user?.loading) {
      return <LoadingComponent />
   }

   if(context.user?.user) {
      history.push('/dashboard');
   }

   return (
      <SignUpFormComponent props={{handleSignUp, errorMsg, setNewUser, loading}}/>
   )
}