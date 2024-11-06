import styled from 'styled-components';

export const ButtonContainer = styled.button`
   align-items: center;
   justify-content: center;
   display: flex;
   padding: 0;  //10px 35px;
   border: 1px solid white; //#474A48;
   background-color: #B6B8D6;
   opacity: 0.9;
   color: #2C302E;
   font-size: 28px;
   font-family: 'roboto';
   font-weight: 700;
   cursor: pointer;
   flex: 1;
   &: hover {
      opacity: 0.7;
   }
`