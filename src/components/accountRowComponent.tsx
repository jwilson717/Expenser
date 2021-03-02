import React, { useState } from 'react';
import { account } from '../types';
import { AccountRowFormComponent } from './accountRowFormComponent';
import { AccountRowViewComponent } from './accountRowViewComponent';

export const AccountRowComponent: React.FC<{account: account}> = ({account}) => {
   const [edit, setEdit] = useState(false);

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
      alert("Save");
   }

   return (
      <>
         {edit ? <AccountRowFormComponent account={account} edit={toggleEdit} save={save} /> 
            : <AccountRowViewComponent account={account} edit={toggleEdit} deleteRow={deleteRow} />}
      </>
   )
}