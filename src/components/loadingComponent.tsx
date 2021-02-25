import { CircularProgress, Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { useDashboardContentStyles } from '../styles/styles';

export const LoadingComponent = () => {
   const classes = useDashboardContentStyles();
   return (
      <Grid container spacing={3}>
         <Grid item xs={12}>
            <Paper className={classes.paper}>
               <Typography component='h2' variant='h4' color='primary' align='center'>
                  Loading
               </Typography>
               <div className={classes.centered}>
                  <CircularProgress size={45} color='primary'/>
               </div>
            </Paper>
         </Grid>
      </Grid>
   )
}