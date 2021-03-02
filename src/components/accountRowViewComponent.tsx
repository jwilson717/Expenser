import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TableCell, TableRow } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import React, { useState } from 'react';
import { account } from '../types';

export const AccountRowViewComponent: React.FC<{account: account, edit: () => void, deleteRow: ()=> void}> = ({account, edit, deleteRow}) => {
   const [open, setOpen] = useState(false);

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
         <Dialog
            disableBackdropClick
            maxWidth='sm'
            aria-labelledby='deleteConfirmation'
            open={open}
         >
            <DialogTitle id='deleteConfirmation'>Confirm Delete</DialogTitle>
            <DialogContent dividers>Are you sure you want to delete?</DialogContent>
            <DialogActions>
               <Button onClick={() => {setOpen(false)}} color='primary'>
                  Cancel
               </Button>
               <Button onClick={deleteRow} color='primary'>
                  Confirm
               </Button>
            </DialogActions>
         </Dialog>
         <TableCell align='right'>
            <IconButton onClick={() => {setOpen(true)}}>
               <Delete color='error'/>
            </IconButton>
            <IconButton onClick={edit}>
               <Edit />
            </IconButton>
         </TableCell>
      </TableRow>
   )
}