import { Avatar, Box, Button, Container, FormHelperText, Grid, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useFormStyles } from '../styles/styles';
import { credentials } from '../types';
import { LockOpenRounded } from '@material-ui/icons';
import classNames from 'classnames';

interface LoginHandlers {
   handleLogin: (e: any) => void;
   setState: React.Dispatch<React.SetStateAction<credentials>>;
   errorMsg: string;
}

export const LoginFormComponent: React.FC<{props:LoginHandlers}> = ({props}) => {
   const [state, setState] = useState<credentials>({username: "", password: ""});
   const classes = useFormStyles();

   const handleChange = (e: any) =>  {
      setState({...state, [e.target.name]: e.target.value});
   }

   useEffect(() => {
      props.setState({username: state.username, password: state.password});
   }, [state]);

   return (
      <Container maxWidth='xs'>
         <h1 className={classNames(classes.centered, classes.appHeader)}>Expenser</h1>
         <Box boxShadow={4} className={classes.form} >
            <form >
               <div className={classes.avatarContainer}>
                  <Avatar className={classes.avatar}>
                     <LockOpenRounded />
                  </Avatar>
               </div>
            <h1 className={classes.centered}>Login</h1>
            <p className={classNames(classes.error, classes.centered)}>{props.errorMsg}</p>
            <Grid container spacing={3}>
               <Grid item xs={12}>
                  <TextField 
                     fullWidth 
                     label='Username' 
                     name='username' 
                     size='small' 
                     variant='filled' 
                     autoFocus 
                     className={classes.input}
                     required
                     onChange={(e) => {handleChange(e)}} />
               </Grid>
               <Grid item xs={12}>
                  <TextField 
                     fullWidth 
                     label='Password' 
                     name='password' 
                     type='password' 
                     size='small' 
                     variant='filled' 
                     className={classes.input}
                     required
                     onChange={(e) => {handleChange(e)}}/>
               </Grid>
               <Grid item xs={12}>
                  <Button type='submit' color='primary' fullWidth variant='contained' onClick={props.handleLogin}>Login</Button>
                  <a href='/signup'>Don't have an account? Sign Up here</a>
               </Grid>
            </Grid>
            </form>
         </Box>
      </Container>
   )
}