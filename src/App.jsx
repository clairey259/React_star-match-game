import { useState } from 'react';
import './App.scss';
import Main from './Components/Main/Main';
import Navbar from './Components/Navbar/Navbar';
import Timer from './Components/Timer/Timer';

const App = () => {

  return (
    <>
      <Navbar />
      <Main />
    </>
  );
}

export default App;
