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
padding-top: 3px;
padding-bottom: 10px;

transform: scale(0.8);
  opacity: 0; // start of animation
  animation: ${kf} 7.0s ease-in-out forwards;


  
`

const Details = props => {
    return (
        <StyledDetails>
        <div className='title'>{props.title}</div>
        </StyledDetails>
  )
}
export default Details;