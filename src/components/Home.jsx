import React, { useState } from 'react';
import Frame from '../img/Frame.png';
import './index.css'

export default function Home({ onSubmit, refe }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;
    onSubmit(inputValue.trim());
    setInputValue('');
  };

  return (
    <div>
      <h1 className='Headiing' style={styles.Headiing}>Welcome to </h1>
      <h1 className='Headiing1' style={styles.Headiing}>Dumb Charades Game </h1>
      <img src={Frame} alt="Frame" style={styles.frame} />

      <form onSubmit={handleSubmit} style={styles.form}>
        <div className='FormCard' >
          <input
            className='inputName'
            type="text"
            placeholder="Enter username"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            style={styles.input}
            ref={refe}
          />

          <button className='submit' type="submit" style={styles.button}>
            Submit
          </button>
        </div>
      </form>

    </div>
  );
}









const styles = {
  form: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    width: '200px',
    marginRight: '10px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  frame: {
    width: '400px',
    height: '300px',
    position: 'relative',
    left: '100px',
    top: '100px',
  },
  Headiing: {

  }
};


