import { Avatar, Box, Button, Container, Grid, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useFormStyles } from '../styles/styles';
import { newUser } from '../types';
import classNames from 'classnames';
import { AccountCircle } from '@material-ui/icons';

interface signUpProps {
   handleSignUp: (e: any) => void;
   errorMsg: string;
   setNewUser: React.Dispatch<React.SetStateAction<newUser>>;
}

export const SignUpFormComponent: React.FC<{props: signUpProps}> = ({props}) => {
   const [state, setState] = useState<newUser>({firstName: "", lastName: "", email: "", username: "", password: "", confirmedPassword: ""});
   const classes = useFormStyles();
   const handleChange = (e: any) =>  {
      setState({...state, [e.target.name]: e.target.value});
   }

   useEffect(() => {
      props.setNewUser(state);
   }, [state]);

   return (
      <Container maxWidth='sm'>
         <h1 className={classNames(classes.centered, classes.appHeader)}>Expenser</h1>
         <Box boxShadow={4} className={classes.form}>
            <div className={classes.avatarContainer}>
               <Avatar className={classes.avatar}>
                  <AccountCircle />
               </Avatar>
            </div>
            <form>
               <h1 className={classes.centered}>Sign Up</h1>
               <p className={classNames(classes.error, classes.centered)}>{props.errorMsg}</p>
               <Grid container spacing={3} >
                  <Grid item md={6} xs={12}>
                     <TextField 
                     fullWidth
                     error={props.errorMsg.indexOf('first') !== -1}
                     label='First Name'
                     name='firstName'
                     value={state.firstName}
                     size='small'
                     variant='filled'
                     className={classes.input}
                     required
                     onChange={(e) => {handleChange(e)}}/>
                  </Grid>
                  <Grid item md={6} xs={12}>
                     <TextField 
                     fullWidth
                     error={props.errorMsg.indexOf('last') !== -1}
                     label='Last Name'
                     name='lastName'
                     value={state.lastName}
                     size='small'
                     variant='filled'
                     className={classes.input}
                     required
                     onChange={(e) => {handleChange(e)}}/>
                  </Grid>
                  <Grid item xs={12}>
                     <TextField 
                     fullWidth
                     error={props.errorMsg.indexOf('email') !== -1}
                     label='Email'
                     name='email'
                     value={state.email}
                     type='email'
                     size='small'
                     variant='filled'
                     className={classes.input}
                     required
                     onChange={(e) => {handleChange(e)}}/>
                  </Grid>
                  <Grid item xs={12}>
                     <TextField 
                     fullWidth
                     error={props.errorMsg.indexOf('username') !== -1}
                     label='Username'
                     name='username'
                     value={state.username}
                     size='small'
                     variant='filled'
                     className={classes.input}
                     required
                     onChange={(e) => {handleChange(e)}}/>
                  </Grid>
                  <Grid item xs={12}>
                     <TextField 
                     fullWidth
                     error={props.errorMsg.indexOf('password') !== -1 || props.errorMsg.indexOf('not match') !== -1}
                     label='Password'
                     name='password'
                     value={state.password}
                     type='password'
                     size='small'
                     variant='filled'
                     className={classes.input}
                     required
                     onChange={(e) => {handleChange(e)}}/>
                  </Grid>
                  <Grid item xs={12}>
                     <TextField 
                     fullWidth
                     error={props.errorMsg.indexOf('confirm') !== -1 || props.errorMsg.indexOf('not match') !== -1}
                     label='Confirm Password'
                     name='confirmedPassword'
                     value={state.confirmedPassword}
                     type='password'
                     size='small'
                     variant='filled'
                     className={classes.input}
                     required
                     onChange={(e) => {handleChange(e)}}/>
                  </Grid>
                  <Grid item xs={12} >
                     <Button 
                        type='submit' 
                        color='primary' 
                        fullWidth 
                        variant='contained'
                        onClick={props.handleSignUp}
                        >Sign Up</Button>
                  </Grid>
               </Grid>
            </form>
            <hr />
            <p>Already have an account?<a href='/'> Login here</a></p>
         </Box>
      </Container>
   )
}