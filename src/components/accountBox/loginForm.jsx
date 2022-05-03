import React, { useContext } from 'react';
import {BoxContainer, FormContainer, Input, MutedLink, SubmitButton, BoldLink} from './common';
// import { Marginer } from '../marginer';
import { AccountContext } from "./accountContext";

export function LoginForm(props) {
    
     // this will declare after declaring the active function for the component
     //onClick function is declared below inside BoldLink 
     const { switchToSignup } = useContext(AccountContext); 


     return <BoxContainer>
               <FormContainer>
                    <Input type="email" placeholder="Email"/>
                     <Input type="password" placeholder="Password"/>
               </FormContainer>
                {/* <Marginer direction="vertical" margin={5} /> */}
                    <MutedLink href="#">Forget your password?</MutedLink>
                    <SubmitButton type="submit">Signin</SubmitButton>
                     {/* <Marginer direction="vertical" margin="1rem" /> */}
                      <MutedLink href="#">Don't have an account? 
                       <BoldLink href="#" onClick={switchToSignup}>Signup</BoldLink></MutedLink>
          </BoxContainer>
}