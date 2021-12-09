import React from 'react'
import styled, {keyframes} from 'styled-components';


const kf = keyframes`
 
  45% {
    transform: scale(1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`


const StyledDetails = styled.div`

font-size: 3.5rem;
padding-top: 80px;


transform: scale(0.8);
  opacity: 0; // start of animation
  animation: ${kf} 7.0s ease-in-out forwards;


  
`

const ExplanationFont = styled.div`

font-size: 1.2rem;
padding-top: 1.2rem;

padding-right: 20%;
padding-left: 20%;
font-style: 'Oxford';



transform: scale(0.8);
  opacity: 0; // start of animation
  animation: ${kf} 5.0s ease-in-out forwards;


  
`

const Details = props => {
    return (
        <StyledDetails>
        <div className='title'>{props.title}</div>
        <ExplanationFont>
            <div className='explanation'>{props.explanation}</div>
        </ExplanationFont>
        
        </StyledDetails>
        
  )
}
export default Details;