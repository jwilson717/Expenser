import React, { createContext, useContext, useEffect, useReducer, useState } from 'react';
import { action, user } from '../types';

interface IAuthContext {
   user?: user;
   setUser: any;
}

const AuthContext = createContext<IAuthContext>({setUser: null});

const userReducer = (user: user, action: action):user|null => {
   switch (action.type) {
      case "LOGIN":
         return !action.user ? null : 
          {...user, 
            id: action.user.id,
            username: action.user.username,
            email: action.user.email 
         };
      case "LOGOUT":
         return null;
      default:
         return user;
   }
}

function readStorage<T>(key: string, initialValue: T|null) {
   const item = localStorage.getItem(key);
   return item ? JSON.parse(item) : initialValue;
}

// const AuthProvider: React.FC = ({ children }) => {
//    const [user, setUser] = useState(readStorage("user", null));

//    useEffect(() => {
//       if (!user) {
//          setUser(readStorage("user", null));
//       }
//    }, []);

//    return (
//       <AuthContext.Provider value={{user, setUser}}>
//          {children}
//       </AuthContext.Provider>
//    )
// }
const AuthProvider: React.FC = ({ children }) => {
   const [user, setUser] = useReducer(userReducer, readStorage("user", null));

   useEffect(() => {
      if (!user) {
         setUser({type: "LOGIN", user: readStorage("user", null)});
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