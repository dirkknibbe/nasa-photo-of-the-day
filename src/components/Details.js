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
font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
font-size: 4.5rem;
padding-top: 80px;
color: lightgrey;


transform: scale(0.8);
  opacity: 0; // start of animation
  animation: ${kf} 6.0s ease-in-out forwards;

  
  
`

const ExplanationFont = styled.div`
font-family: 'Noto Serif', serif;

font-size: 1.5rem;
padding-top: 1.2rem;

padding-right: 27%;
padding-left: 27%;
line-height: 1.7rem;





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