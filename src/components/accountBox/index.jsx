
import styled from 'styled-components'


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

const BackDrop = styled.div`
   position: absolute;
   display: flex;
   flex-direction: column;
   border-radius: 50%;
   width: 160%;
   height: 550px;
   top: -290px;
   left: -70px;
   transform: rotate(60deg);
   background: rgb(0,255,196);
   background: linear-gradient(90deg, rgba(0,255,196,1) 20%, rgba(0,173,133,1) 100%); 
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

export function AccountBox(props) {
 return <BoxContainer>
      <TopContainer>
           <BackDrop />
           <HeaderContainer>
                <HeaderText>Welcome</HeaderText>
                     <HeaderText>Back</HeaderText>
           </HeaderContainer>
      </TopContainer>
 </BoxContainer>
}