import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { action, userState } from '../types';
import { clearUser, validateToken } from './serviceCalls';

interface IAuthContext {
   user?: userState;
   userDispatch: any;
}

const AuthContext = createContext<IAuthContext>({userDispatch: null});

const userReducer = (user: userState, action: action):userState => {
   switch (action.type) {
      case "LOGIN":
         return !action.user.user ? {user: null, loading: false} : 
          {...user, 
            user: {
               id: action.user.user.id,
               username: action.user.user.username,
               email: action.user.user.email 
            },
            loading: false
         };
      case "LOGOUT":
         return {user: null, loading: false};
      case "LOADING":
         return {user: null, loading: true};
      default:
         return user;
   }
}

function readStorage<T>(key: string, initialValue: T|null) {
   const item = localStorage.getItem(key);
   return item ? JSON.parse(item) : initialValue;
}

const AuthProvider: React.FC = ({ children }) => {
   const [user, userDispatch] = useReducer(userReducer, {user: null, loading: false});

   useEffect(() => {
      if (!user.user) {
         const storedUser = readStorage("user", null);
         if (storedUser) {
            userDispatch({type: "LOADING", user: {user: null, loading: true}})
            const token = readStorage("tokenId", null);
            if (token) {
               validateToken(token)
                  .then(res => {
                     if (res.status === 200) {
                        userDispatch({type: "LOGIN", user: {user: storedUser, loading: false}});
                     } else {
                        clearUser();
                        userDispatch({type: "LOGOUT", user: {user: null, loading: false}});
                     }
                  }).catch(e => {
                     clearUser();
                     userDispatch({type: "LOGOUT", user: {user: null, loading: false}});
                  })
            }
         }
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