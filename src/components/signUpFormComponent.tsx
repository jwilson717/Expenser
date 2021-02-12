import React, { useEffect, useState } from 'react';
import { newUser } from '../types';

interface signUpProps {
   handleSignUp: (e: any) => void;
   errorMsg: string;
   setNewUser: React.Dispatch<React.SetStateAction<newUser>>;
}

export const SignUpFormComponent: React.FC<{props: signUpProps}> = ({props}) => {
   const [state, setState] = useState<newUser>({firstName: "", lastName: "", email: "", username: "", password: "", confirmedPassword: ""});

   const handleChange = (e: any) =>  {
      setState({...state, [e.target.name]: e.target.value});
   }

   useEffect(() => {
      props.setNewUser(state);
   }, [state]);

   return (
      <div></div>
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