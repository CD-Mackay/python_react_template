import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios';



function App() {

  const [profileData, setProfileData] = useState(null);
  const [time, setTime] = useState(0);

  useEffect(() => {
    axios({
      method: 'GET',
      url: '/time'
    }).then(res => res.json()).then(data => {
      setTime(data.time);
    })
  }, [])

  function getData() {
    axios({
      method: 'GET',
      url: '/profile',
    }).then((response) => {
      const res = response.data
      setProfileData(({
        profile_name: res.name,
        about_me: res.about}))
      }).catch((error) => {
        if (error.response) {
          console.log(error.response)
          console.log(error.response.status)
          console.log(error.response.headers)
        }
      })}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
            <p>To get your profile details: </p><button onClick={getData}>Click me</button>
        {profileData && <div>
              <p>Profile name: {profileData.profile_name}</p>
              <p>About me: {profileData.about_me}</p>
            </div>
        }
        <p>It is currently {time}</p>
      </header>
    </div>
  );
}

export default App;
