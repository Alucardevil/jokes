import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ChuckNorrisJoke.css';

const colors = ['green', 'blue', 'red'];

const ChuckNorrisJoke = () => {
  const [joke, setJoke] = useState('');
  const [c, setC] = useState(colors[Math.floor(Math.random()*colors.length)]);
 

 useEffect(() => {
    const fetchJoke = async () => {
      try {
        const response = await axios.get('https://api.chucknorris.io/jokes/random');
        setJoke(response.data.value);
      } catch (error) {
        console.error('Error fetching joke:', error);
        setJoke('Failed to fetch joke'); 
      }
    };
 
    fetchJoke();
    const intervalId = setInterval(fetchJoke, 10000);

    return () => clearInterval(intervalId);       
  }, []);

  useEffect(() => {
    setC(colors[Math.floor(Math.random()*colors.length)]);
  }, [joke]);
  
  return (
    <div className={c} id='chuckNorrisJoke'> 
      <h1 id='para' >Random Chuck Norris Joke</h1>
      <p>{joke}</p>
    </div>
  );
};

export default ChuckNorrisJoke;


