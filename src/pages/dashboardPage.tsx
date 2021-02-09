import React from 'react';
import { useAuthContext } from '../util/authContext';

export const DashboardPage = () => {
   const context = useAuthContext();

   const tempLogout = () => {
      context.setUser(null);
      localStorage.removeItem("user");
      localStorage.removeItem("tokenId");
   }

   return (
      <div>
         <h2 className='text-center'>Welcome {context.user?.username}</h2>
         <div className='text-center'>
            <button onClick={tempLogout} className='btn btn-secondary'>Logout</button>
         </div>
      </div>
   )
}