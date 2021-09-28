import React from 'react';
import logo from './logo.svg';
import './App.css';
import useDarkMode from './Hooks/useDarkMode';
import { BsMoon } from 'react-icons/bs';
import { HiOutlineLightBulb } from 'react-icons/hi';

function App() {
  const [enabled, setIsEnabled] = useDarkMode();

  return (
    <div className='App bg-primary transition delay-100'>
      <button type='button' className='bg-green-500 p-2 rounded-lg mt-3' onClick={() => setIsEnabled(!enabled)}>
        {!enabled ? <BsMoon /> : <HiOutlineLightBulb />}
      </button>
      <header className='App-header '>
        <img src={logo} className='App-logo' alt='logo' />
        <p className='text-secondary'>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className='text-accent' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
