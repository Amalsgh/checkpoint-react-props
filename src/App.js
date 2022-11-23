import React from 'react';
import './App.css';
import Profile from './Profile/Profile';

import ProfilePhoto from './Profile/assets/amal.jpg'



function App() {
  return (
    <div className="App">
      <Profile Fullname="Amal" bio="Student" profession="Web developer" age={25}>
        <img src={ProfilePhoto} alt='pic' />
      </Profile>
      
    </div>
  );
}

export default App;
