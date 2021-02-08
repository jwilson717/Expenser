import React, { createContext, PropsWithChildren, ReactNode, useState } from 'react';
import { user } from '../types';

const AuthContext = createContext(null);

const AuthProvider = (props: ReactNode) => {
   const [user, setUser] = useState<user>({id: 0, username: "", email: ""});

}