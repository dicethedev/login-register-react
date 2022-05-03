import React from 'react';
import styled from 'styled-components';
import { LoginForm } from '../accountBox/loginForm';
import { motion } from 'framer-motion';
import { useState } from "react";
import { SignupForm } from '../accountBox/signupForm';
import { AccountContext } from "./accountContext";

const BoxContainer = styled.div`
   width: 280px;
   min-height: 550px;
   flex-direction: column;
   border-radius: 20px;
   background-color: #fff;
   box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
   position: relative;
   overflow: hidden;
`;

const TopContainer = styled.div`
   width: 100%;
   height: 250px;
   display: flex;
   display: flex;
   flex-direction: column;
   justify-content: flex-end;
   padding: 0 1.8rem;
   padding-bottom: 5rem;
`;

// to backdrop styled-component I add a the motion inside the function
const BackDrop = styled(motion.div)`
   position: absolute;
   display: flex;
   flex-direction: column;
   border-radius: 50%;
   width: 160%;
   height: 550px;
   top: -290px;
   left: -70px;
   transform: rotate(60deg);
   background: rgb(0, 255, 196);
   background: linear-gradient(90deg, rgba(0, 255, 196,1) 20%, rgba(0, 173, 133,1) 100%); 
`;

const HeaderContainer = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;    
`;

const HeaderText = styled.h2`
   font-size: 35px;
   font-weight: 600;
   line-height: 1.24;
   margin: 0;
   color: #fff;
   z-index: 10;
`;

const SmallText = styled.h5`
   color: #fff;
   font-weight: 400;
   font-size: 13px;
   z-index: 10;
   margin: 0;
   margin-top: 8px;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8rem;
`;

const backdropVariants =  {
   expanded: {
      width: "233%",
      height: "1050px",
      borderRadius: "20%",
      transform: "rotate(60deg)"
   },
   collapsed: {
      width: "160%",
      height: "550px",
      borderRadius: "50%",
      transform: "rotate(60deg)"
   }
}

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};


export function AccountBox(props) {
   
   const [isExpanded, setExpanded] = useState(false);
   const [active, setActive] = useState("signin");

   const playExpandingAnimation = () => {
      setExpanded(true);
      setTimeout(() => {
         setExpanded(false);
      }, expandingTransition.duration * 1000 - 1500);
   }
   
   const switchToSignup = () => {
      playExpandingAnimation();
      setTimeout(() => {
         //from signin to signup so that the animation can work for it perfectly
      setActive("signup");
     }, 400);
   };

     const switchToSignin = () => {
      playExpandingAnimation();
      setTimeout(() => {
         //from signin to signup so that the animation can work for it perfectly
      setActive("signin");
     }, 400);
   };


   const contextValue = { switchToSignup, switchToSignin };

     return (
      <AccountContext.Provider value={contextValue}>
     <BoxContainer>
      <TopContainer>
           <BackDrop initial={false} 
            animate={isExpanded ? "expanded" : "collapsed" }
            variants={backdropVariants} 
            transition={expandingTransition}/>

                   {active === "signin" && <HeaderContainer>
                <HeaderText>Welcome</HeaderText>
                   <HeaderText>Back</HeaderText>
                    <SmallText>Please sign-in to continue!</SmallText>
           </HeaderContainer>}

           
                   {active === "signup" && <HeaderContainer>
                <HeaderText>Create</HeaderText>
                   <HeaderText>Account</HeaderText>
                    <SmallText>Please sign-up to continue!</SmallText>
           </HeaderContainer>}
           

      </TopContainer>
     <InnerContainer>
        {/* <LoginForm /> */}
        {active === "signin" && <LoginForm /> }
        {active === "signup" && <SignupForm /> }
     </InnerContainer>
     </BoxContainer>
     </AccountContext.Provider>
   );
}

 {/* this onClick below is for testing how it works */}
      {/* <p onClick={playExpandingAnimation}>click me</p> */}
  