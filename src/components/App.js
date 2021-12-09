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



  useEffect(() => { 
    const fetchPicture = () => {
      axios.get(`${BASE_URL}${API_KEY}`)
      .then(res => {
        
         setPicture(res.data.hdurl);
      })
      .catch(err => {
      })
    }
     fetchPicture();
      }, [])


  useEffect(() => { 
    const fetchTitle = () => {
      axios.get(`${BASE_URL}${API_KEY}`)
      .then(res => {
        console.log(res.data.title)
         setTitle(res.data.title);
      })
      .catch(err => {
      })
    }
     fetchTitle();
      }, [])

    

  return (
    <div className="App">
      <Picture image={picture} />
      <Details title={title}/> 
      
    </div>
 
  );
}

export default App;
