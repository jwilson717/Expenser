import { Grid, Paper, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDashboardContentStyles } from '../styles/styles';
import { accounts } from '../types';
import { getAccounts } from '../util/serviceCalls';
import { AccountListComponent } from './accountListComponent';

// const accountsLists = [
//    {id: 1, type: {id: 1, type: "Checking"}, description: "Chase Checking", balance: 1000.00, userId: 1},
//    {id: 2, type: {id: 2, type: "Savings"}, description: "Chase Savings", balance: 3000.00, userId: 1},
//    {id: 3, type: {id: 2, type: "Savings"}, description: "Chase Savings", balance: 3000.00, userId: 1}
// ]

export const HomeDashboardComponent = () => {
   const classes = useDashboardContentStyles();
   const [accountsList, setAccounts] = useState<accounts>({accounts: []});

   useEffect(()=>{
      getAccounts().then(res => {
         setAccounts({accounts: res.data});
      })
   }, [])
   
   return (
      <div>
         <Grid container spacing={3} justify='center' className={classes.container}>
            <Grid item xs={12} md={4}>
               <Paper className={classes.table}>
                  <Typography variant='h6' className={classes.tileTitle} noWrap>
                     Accounts
                  </Typography>
                  <Typography className={classes.tileContent}>
                     {accountsList.accounts.length}
                  </Typography>
               </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
               <Paper className={classes.table}>
                  <Typography variant='h6' className={classes.tileTitle} noWrap>
                     Accounts
                  </Typography>
                  <Typography className={classes.tileContent}>
                     {accountsList.accounts.length}
                  </Typography>
               </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
               <Paper className={classes.table}>
                  <Typography variant='h6' className={classes.tileTitle} noWrap>
                     Total Balance
                  </Typography>
                  <Typography className={classes.tileContent} noWrap>
                  {accountsList.accounts.reduce((sum, current) => sum + current.balance, 0)
                     .toLocaleString('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 2})}
                  </Typography>
               </Paper>
            </Grid>
            <Grid item xs={12}>
               <Paper className={classes.table}>
               <Typography component='h2' variant='h6' color='primary' className={classes.title}>
                  Accounts
               </Typography>
                  <AccountListComponent accounts={{accounts: accountsList.accounts}}/>
               </Paper>
            </Grid>
         </Grid>
      </div>
   )
}