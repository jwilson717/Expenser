import React, { useState } from 'react';
import { useAuthContext } from '../util/authContext';
import { getAxiosInstance } from '../util/axiosConfig';
import { logout } from '../util/serviceCalls';

export const DashboardPage = () => {
   const context = useAuthContext();
   const [state, setState] = useState();

   const tempLogout = () => {
      context.setUser(null);
      logout();
   }


   const test = () => {
      getAxiosInstance().get(`/userauth/systemuser?id=${context.user?.id}`)
         .then(res => {
            setState(res.data.email);
         })
   }

   return (
      <div>
         <h2 className='text-center'>Welcome {context.user?.username}</h2>
         <h2 className='text-center'>{state}</h2>
         <button onClick={test} className='btn btn-secondary'>Test</button>
         <div className='text-center'>
            <button onClick={tempLogout} className='btn btn-secondary'>Logout</button>
         </div>
      </div>
   )
}