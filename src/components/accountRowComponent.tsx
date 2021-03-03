import React, { useState } from 'react';
import { account } from '../types';
import { AccountRowFormComponent } from './accountRowFormComponent';
import { AccountRowViewComponent } from './accountRowViewComponent';

export const AccountRowComponent: React.FC<{account: account}> = ({account}) => {
   const [edit, setEdit] = useState(false);
   const [accountState, setAccountState] = useState<account>(account);

   const toggleEdit = () => {
      if (edit) {
         setEdit(false);
      } else {
         setEdit(true);
      }
   }

   const deleteRow = () => {
      alert("Delete");
   }

   const save = () => {
      console.log(accountState);
      setEdit(false);
   }

   return (
      <>
         {edit ? <AccountRowFormComponent account={accountState} accountState={setAccountState} edit={toggleEdit} save={save} /> 
            : <AccountRowViewComponent account={accountState} edit={toggleEdit} deleteRow={deleteRow} />}
      </>
   )
}