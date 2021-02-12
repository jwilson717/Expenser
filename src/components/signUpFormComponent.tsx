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
         <Box boxShadow={4} className={classes.form} marginTop={4}>
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
         </Box>
      </Container>
      // <Container>
      //    <Row className='justify-content-center m-2'>
      //       <Form className='m-2 p-3 shadow border border-dark'>
      //          <h2 className='text-center'>Create Account</h2>
      //          <p className='error'>{props.errorMsg}</p>
      //          <hr/>
      //          <Form.Row>
      //             <Form.Group controlId='firstName' className='px-2'>
      //                <Form.Label>First Name</Form.Label>
      //                <Form.Control type='text' name='firstName' value={state.firstName} onChange={(e) => {handleChange(e)}} placeholder='First Name' required />
      //             </Form.Group>
      //             <Form.Group controlId='lastName' className='px-2'>
      //                <Form.Label>Last Name</Form.Label>
      //                <Form.Control type='text' name='lastName' value={state.lastName} onChange={(e) => {handleChange(e)}} placeholder='Last Name' required />
      //             </Form.Group>
      //          </Form.Row>
      //          <Form.Group controlId='email' className='px-2'>
      //             <Form.Label>Email</Form.Label>
      //             <Form.Control type='text' name='email' value={state.email} onChange={(e) => {handleChange(e)}} placeholder='Email' required />
      //          </Form.Group>
      //          <Form.Group controlId='username' className='px-2'>
      //             <Form.Label>Username</Form.Label>
      //             <Form.Control type='text' name='username' value={state.username} onChange={(e) => {handleChange(e)}} placeholder='Username' required />
      //          </Form.Group>
      //          <Form.Group controlId='password' className='px-2'>
      //             <Form.Label>Password</Form.Label>
      //             <Form.Control type='password' name='password' value={state.password} onChange={(e) => {handleChange(e)}} placeholder='Password' required />
      //             <Form.Label>Confirm Password</Form.Label>
      //             <Form.Control type='password' name='confirmedPassword' value={state.confirmedPassword} onChange={(e) => {handleChange(e)}} placeholder='Confirm Password' required />
      //          </Form.Group>
      //          <Form.Group className='text-center'>
      //             <Button type='submit' className='btn' onClick={props.handleSignUp}>Sign Up</Button>
      //          </Form.Group>
      //       </Form>
      //    </Row>
      // </Container>
   )
}