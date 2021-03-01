import { IconButton, TableCell, TableRow } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import React from 'react';
import { account } from '../types';

export const AccountRowComponent: React.FC<{account: account}> = ({account}) => {

   return (
      <TableRow key={account.id}>
         <TableCell>
            {account.description}
         </TableCell>
         <TableCell component='th' scope='row'>
            {account.type.type}
         </TableCell>
         <TableCell component='th' scope='row' >
            {account.balance.toLocaleString('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 2})}
         </TableCell>
         <TableCell align='right'>
            <IconButton>
               <Delete/>
            </IconButton>
            <IconButton>
               <Edit />
            </IconButton>
         </TableCell>
      </TableRow>
   )
}