import { IconButton, TableCell, TableRow, TextField } from '@material-ui/core';
import { Cancel, Save } from '@material-ui/icons';
import React, { useState } from 'react';
import { account } from '../types';

export const AccountRowFormComponent: React.FC<{account: account, edit: ()=> void, save: ()=> void}> = ({account, edit, save}) => {
   const [item, setItem] = useState<account>(account);

   const handleChange = (e: any) => {
      setItem({...item, [e.target.name]: e.target.value})
   }

   return (
      <TableRow key={account.id}>
         <TableCell>
            <TextField
               fullWidth
               label='Description'
               name='description'
               size='small'
               variant='outlined'
               value={item.description}
               onChange={(e) => {handleChange(e)}}
            />
         </TableCell>
         <TableCell component='th' scope='row'>
            {account.type.type}
         </TableCell>
         <TableCell component='th' scope='row' >
            <TextField
               fullWidth
               type='number'
               variant='outlined'
               size='small'
               name='balance'
               value={item.balance}
               onChange={(e) => {handleChange(e)}}
            />
         </TableCell>
         <TableCell align='right'>
            <IconButton onClick={edit}>
               <Cancel />
            </IconButton>
            <IconButton onClick={save}>
               <Save color='primary'/>
            </IconButton>
         </TableCell>
      </TableRow>
   )
}