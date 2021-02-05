import React, { useState } from 'react';
import { Button, Container, Form, Row } from 'react-bootstrap';

export const SignUpFormComponent: React.FC = () => {
   const [state, setState] = useState({});

   const handleChange = (e: any) =>  {
      setState({...state, [e.target.name]: e.target.value});
   }

   return (
      <Container>
         <Row className='justify-content-center m-2'>
            <Form className='m-2 p-3 shadow border border-dark'>
               <h2 className='text-center'>Create Account</h2>
               <hr/>
               <Form.Row>
                  <Form.Group controlId='firstName' className='px-2'>
                     <Form.Label>First Name</Form.Label>
                     <Form.Control type='text' name='firstName' onChange={(e) => {handleChange(e)}} placeholder='First Name'/>
                  </Form.Group>
                  <Form.Group controlId='lastName' className='px-2'>
                     <Form.Label>Last Name</Form.Label>
                     <Form.Control type='text' name='lastName' onChange={(e) => {handleChange(e)}} placeholder='Last Name'/>
                  </Form.Group>
               </Form.Row>
               <Form.Group controlId='email' className='px-2'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type='text' name='email' onChange={(e) => {handleChange(e)}} placeholder='Email'/>
               </Form.Group>
               <Form.Group controlId='username' className='px-2'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type='text' name='username' onChange={(e) => {handleChange(e)}} placeholder='Username'/>
               </Form.Group>
               <Form.Group controlId='password' className='px-2'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type='text' name='password1' onChange={(e) => {handleChange(e)}} placeholder='Password'/>
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control type='text' name='password2' onChange={(e) => {handleChange(e)}} placeholder='Confirm Password'/>
               </Form.Group>
               <Form.Group className='text-center'>
                  <Button type='submit' className='btn'>Submit</Button>
               </Form.Group>
            </Form>
         </Row>
      </Container>
   )
}