import React from 'react';


const Picture = props => {
    return (
        <div className='picture'>
          <img src = {props.image} alt = {props.altimage}/>
          
        </div>
      )
}

export default Picture;