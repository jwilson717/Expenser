import { Avatar, Box, Button, Container, Grid, InputAdornment, TextField, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useFormStyles } from '../styles/styles';
import { credentials } from '../types';
import { AccountCircle, LockOpenRounded, LockSharp, Visibility, VisibilityOff } from '@material-ui/icons';
import classNames from 'classnames';

interface LoginHandlers {
   handleLogin: (e: any) => void;
   setState: React.Dispatch<React.SetStateAction<credentials>>;
   errorMsg: string;
}

export const LoginFormComponent: React.FC<{props:LoginHandlers}> = ({props}) => {
   const [state, setState] = useState<credentials>({username: "", password: ""});
   const [visible, setVisible] = useState<boolean>(false);
   const classes = useFormStyles();

   const handleChange = (e: any) =>  {
      setState({...state, [e.target.name]: e.target.value});
   }

   const toggleVisible = () => {
      if (visible) {
         setVisible(false);
      } else {
         setVisible(true);
      }
   }

   useEffect(() => {
      props.setState({username: state.username, password: state.password});
   }, [state]);

   return (
      <Container maxWidth='xs'>
         <Typography component='h1' variant='h1' className={classes.appHeader} color='primary'>
            Expenser
         </Typography>
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
                     error={props.errorMsg.indexOf("Username") !== -1}
                     label='Username' 
                     name='username' 
                     size='small' 
                     variant='filled' 
                     autoFocus 
                     className={classes.input}
                     InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                           <AccountCircle />
                        </InputAdornment>
                      ),
                      className: classes.multilineColor
                     }}
                     InputLabelProps={{
                        classes: {
                           root: classes.multilineColor
                        }
                     }}
                     required
                     onChange={(e) => {handleChange(e)}} />
               </Grid>
               <Grid item xs={12}>
                  <TextField 
                     fullWidth 
                     error={props.errorMsg.indexOf("Password") !== -1}
                     label='Password' 
                     name='password' 
                     type={visible ? 'text': 'password'} 
                     size='small' 
                     variant='filled' 
                     className={classes.input}
                     InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                             <LockSharp />
                          </InputAdornment>
                        ),
                        endAdornment: (
                           <InputAdornment position='end'>
                             {visible ? <VisibilityOff onClick={toggleVisible} />: <Visibility onClick={toggleVisible} />}
                          </InputAdornment>
                        ),
                        className: classes.multilineColor  
                       }}
                       InputLabelProps={{
                        classes: {
                           root: classes.multilineColor
                        }
                     }}
                     required
                     onChange={(e) => {handleChange(e)}}/>
               </Grid>
               <Grid item xs={12}>
                  <Button type='submit' color='secondary' fullWidth variant='contained' onClick={props.handleLogin}>Login</Button>
               </Grid>
            </Grid>
            </form>
            <p>Don't have an account?<a href='/signup'> Sign Up here</a></p>
         </Box>
      </Container>
   )
}