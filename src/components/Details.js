import React, { useState, useEffect } from 'react'
import { BASE_URL, API_KEY } from '../constants'
import axios from 'axios'

export default function Details(props) {
  const { pictureId, close } = props
  const [details, setDetails] = useState(null)



  // 👉 TASK 5 - Create a side effect 👻 that runs only after first render
  // and puts a 'click' event handler on document.
  // See what happens if we don't clean up.


  // 👉 TASK 6 - Create a side effect 🥵 that runs after every render.
 

  // 👉 TASK 7 - Create a side effect 📲 that runs when a particular variable changes:
  // Whenever props.friendId updates we should trigger a fetch for details of the friend.
  // The URL should end up looking like `http://localhost:4000/friends/1?api_key=xyz`
  // On success, shove the details of the friend in `details` slice of state
  useEffect(() => {
    axios.get(`${BASE_URL}${API_KEY}`)
    .then( res => {
    setDetails(res.data.explanation)
    })
    .catch(err => {
    debugger
    })
  }, [pictureId])
  console.log('***** RENDERING! *****')



  return (
    <div className='container'>
      

        <>
          <p>{props.data.explanation}</p>
          
        </>
      
      <button onClick={close}>Close</button>
    </div>
  )
}
