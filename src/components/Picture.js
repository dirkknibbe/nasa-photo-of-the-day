import React from 'react';


const Picture = props => {
    return (
        <div className='picture'>
          {props.data.explanation}
          <button onClick={() => openExplanation(props.data.explanation)}>
            See Explanation
          </button>
        </div>
      )
}

export default Picture;