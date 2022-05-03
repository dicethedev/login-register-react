import React, { useContext } from 'react';
import {BoxContainer, FormContainer, Input, MutedLink, SubmitButton, BoldLink} from './common';
// import { Marginer } from '../marginer';
import { AccountContext } from "./accountContext";

export function SignupForm(props) {
          // this will declare after declaring the active function for the component
     //onClick function is declared below inside BoldLink 
     const { switchToSignin } = useContext(AccountContext); 

     return (
     <BoxContainer>
               <FormContainer>
                    <Input type="text" placeholder="Full Name"/>
                    <Input type="email" placeholder="Email"/>
                     <Input type="password" placeholder="Password"/>
                     <Input type="password" placeholder="Confirm Password"/>
               </FormContainer>
                  <SubmitButton type="submit">Signup</SubmitButton>
                    {/* <Marginer direction="vertical" margin="1rem" /> */}
                     <MutedLink href="#">Already have an account? 
                     <BoldLink href="#" onClick={switchToSignin}>Signin</BoldLink></MutedLink>
          </BoxContainer>
     )
}