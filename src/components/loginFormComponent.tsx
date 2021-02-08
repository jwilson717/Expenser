import React, { useEffect, useState } from 'react';
import { Button, Container, Form, InputGroup, Row } from 'react-bootstrap';
import '../scss/forms.scss';
import { credentials } from '../types';

interface LoginHandlers {
   handleSignUp: () => void;
   handleLogin: (e: any) => void;
   setState: React.Dispatch<React.SetStateAction<credentials>>;
}

export const LoginFormComponent: React.FC<{props:LoginHandlers}> = ({props}) => {
   const [state, setState] = useState<credentials>({username: "", password: ""});

   const handleChange = (e: any) =>  {
      setState({...state, [e.target.name]: e.target.value});
   }

   useEffect(() => {
      props.setState({username: state.username, password: state.password});
   }, [state]);

   return (
      <Container>
         <Row className='justify-content-center'>
            <div className='m-2 p-2'>
               <h1 className='text-center m-3' id='loginLogo'>Expenser</h1>
               <Form id='loginForm' className='border border-dark shadow p-3 px-5'>
                  <div className='text-center'>
                     <h2 className='m-2 mb-4'>Login</h2>
                  </div>
                  <Form.Group controlId='loginFormUsername' className='px-2'>
                     <InputGroup>
                        <InputGroup.Prepend>
                           <InputGroup.Text>@</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control type='text' name='username' value={state.username} onChange={(e) => {handleChange(e)}} placeholder='Username'/>
                     </InputGroup>
                  </Form.Group>
                  <Form.Group controlId='loginFormPassword' className='px-2'>
                     <InputGroup>
                        <InputGroup.Prepend>
                           <InputGroup.Text>#</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control type='password' name='password' value={state.password} onChange={(e) => {handleChange(e)}} placeholder='Password'/>
                     </InputGroup>
                  </Form.Group>
                  <div className='text-center'>
                     <Button type='submit' id='loginButton'className='btn m-2 'onClick={props.handleLogin}>Login</Button>
                  </div>
                  <hr/>
                  <Form.Text className='text-center'>Dont have an account?? Sign up here!</Form.Text>
                  <Row className='justify-content-center'>
                     <Button id='signUpButton' onClick={props.handleSignUp}>Sign Up</Button>
                  </Row>
               </Form>
            </div>
         </Row>
      </Container>
   )
}