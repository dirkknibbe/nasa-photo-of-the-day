import React from 'react';
import styled, { keyframes } from 'styled-components';


const kf = keyframes`
 

  65% {
    transform: scale(1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`



const StyledPicture = styled.div`

padding-top: 60px;


transform: scale(0.9); // start of animation
  opacity: 0; // start of animation
  animation: ${kf} 5.0s ease-in-out forwards;
  
  
`






const Picture = props => {
    
    return (
    <StyledPicture>
        <div className='picture'>
          <img src = {props.image} alt = {props.altimage} />
          
        </div>
    </StyledPicture>
      )     
}

export default Picture;