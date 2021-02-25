import { Grid, Paper, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useDashboardContentStyles } from '../styles/styles';
import { useAuthContext } from '../util/authContext';
import { getAxiosInstance } from '../util/axiosConfig';

export const HomeDashboardComponent = () => {
   const context = useAuthContext();
   const [state, setState] = useState();
   const classes = useDashboardContentStyles();
   const test = () => {
      getAxiosInstance().get(`/userauth/systemuser?id=${context.user?.user?.id}`)
         .then(res => {
            setState(res.data.email);
         })
   }
   
   return (
      <Grid container spacing={3}>
         <Grid item xs={12}>
            <Paper className={classes.paper}>
               <Typography component='h2' variant='h4' color='primary' className={classes.title}>
                  Welcome {context.user?.user?.username}
               </Typography>
               <h2 className='text-center'>{state}</h2>
               <button onClick={test} className='btn btn-secondary'>Test</button>
            </Paper>
         </Grid>
      </Grid>
   )
}