import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { accounts } from '../types';
import { AccountRowComponent } from './accountRowComponent';

export const AccountListComponent: React.FC<{accounts: accounts}> = ({accounts}) => {

   return (
      <Table aria-label='collapsible table' stickyHeader size='small'>
         <TableHead>
            <TableRow>
               <TableCell>Account</TableCell>
               <TableCell>Type</TableCell>
               <TableCell>Balance</TableCell>
               <TableCell />
            </TableRow>
         </TableHead>
         <TableBody>
            {accounts.accounts.map((e) => (
               <AccountRowComponent account={e} key={e.id}/>
            ))}
         </TableBody>
      </Table>
   )
}