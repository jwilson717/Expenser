import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useDashboardContentStyles } from '../styles/styles';
import { useAuthContext } from '../util/authContext';

export const HomeDashboardComponent = () => {
   const context = useAuthContext();
   const classes = useDashboardContentStyles();
   
   return (
      <div>
         <Typography component='h2' variant='h4' color='primary' className={classes.title}>
            Accounts
         </Typography>
         <Typography component='p' variant='body2' color='primary' className={classes.title}>
            Welcome {context.user?.user?.username}
         </Typography>
         <Grid container spacing={3} justify='center'>
            
         </Grid>
      </div>
   )
}