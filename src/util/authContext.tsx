import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { action, userState } from '../types';

interface IAuthContext {
   user?: userState;
   userDispatch: any;
}

const AuthContext = createContext<IAuthContext>({userDispatch: null});

const userReducer = (user: userState, action: action):userState => {
   switch (action.type) {
      case "LOGIN":
         return !action.user.user ? {user: null} : 
          {...user, 
            user: {
               id: action.user.user.id,
               username: action.user.user.username,
               email: action.user.user.email 
            }
         };
      case "LOGOUT":
         return {user: null};
      default:
         return user;
   }
}

function readStorage<T>(key: string, initialValue: T|null) {
   const item = localStorage.getItem(key);
   return item ? JSON.parse(item) : initialValue;
}

const AuthProvider: React.FC = ({ children }) => {
   const [user, userDispatch] = useReducer(userReducer, {user: readStorage("user", null)});

   useEffect(() => {
      if (!user.user) {
         userDispatch({type: "LOGIN", user: {user: readStorage("user", null)}});
      }
   }, []);

   return (
      <AuthContext.Provider value={{user, userDispatch}}>
         {children}
      </AuthContext.Provider>
   )
}

const useAuthContext = () => {
   return useContext(AuthContext);
}

export {AuthProvider, useAuthContext};