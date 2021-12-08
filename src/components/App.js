import React from 'react';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import {API_KEY, BASE_URL} from './constants/index'

function App() {
  const [picture, setPicture] = useState([])
  const [currentPictureId, setCurrentPictureId] = useState(null)

  const openExplanation = id => {
    setCurrentPictureId(id)
  }
  const closeExplanation = () => {
    setCurrentPictureId(null)
  }

  useEffect(() => { 
    const fetchPicture = () => {
      axios.get(`${BASE_URL}${API_KEY}`)
      .then(res => {
        console.log(res)
         setPicture(res.url);
      })
      .catch(err => {
        debugger
      })
    }
     fetchPicture();
      }, [])

      const Picture = (props) => (
        <div className='picture'>
          {props.url}
          <button onClick={() => openExplanation(props.explanation)}>
            See Explanation
          </button>
        </div>
      )

  return (
    <div className="App">
       {
        currentPictureId && <Picture pictureId={currentPictureId} close={closeExplanation} />
      }
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
