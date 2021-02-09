import React, { createContext, useContext, useEffect, useState } from 'react';
import { user } from '../types';

interface IAuthContext {
   user?: user;
   setUser: any;
}

const AuthContext = createContext<IAuthContext>({setUser: null});

function readStorage<T>(key: string, initialValue: T|null) {
   const item = localStorage.getItem(key);
   return item ? JSON.parse(item) : initialValue;
}

const AuthProvider: React.FC = ({ children }) => {
   const [user, setUser] = useState(readStorage("user", null));

   useEffect(() => {
      if (!user) {
         setUser(readStorage("user", null));
      }
   }, []);

   return (
      <AuthContext.Provider value={{user, setUser}}>
         {children}
      </AuthContext.Provider>
   )
}

const useAuthContext = () => {
   return useContext(AuthContext);
}

export {AuthProvider, useAuthContext};