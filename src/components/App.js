import React from 'react';
import '../design-files/App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import {API_KEY, BASE_URL} from '../constants/index'
import Picture from './Picture';
import Details from './Details';


function App() {
  const [picture, setPicture] = useState([])
  const [title, setTitle] = useState('')
  const [explanation, setExplanation] = useState('')



  useEffect(() => { 
    const fetchPicture = () => {
      axios.get(`${BASE_URL}${API_KEY}`)
      .then(res => {
        
         setPicture(res.data.url);
      })
      .catch(err => {
      })
    }
     fetchPicture();
      }, [])


  useEffect(() => { 
    const fetchDetails = () => {
      axios.get(`${BASE_URL}${API_KEY}`)
      .then(res => {
        console.log(res.data.title)
        console.log(res.data)
         setTitle(res.data.title);
         setExplanation(res.data.explanation)
      })
      .catch(err => {
      })
    }
     fetchDetails();
      }, [])

    

  return (
    
    <div className="App">
      
       
      <Details title={title} explanation={explanation}/> 
      <Picture image={picture} />
     
      
    </div>
 
  );
}

export default App;
