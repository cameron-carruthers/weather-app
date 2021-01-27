import { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import axios from 'axios';
import LogIn from './LogIn';
import Forecast from './Forecast';
import Loading from './Loading';
import Error from './Error';

const GlobalStyle = createGlobalStyle`

  html {
      font-size: 16px;
      box-sizing: border-box;
    }

    *, *:before, *:after {
      box-sizing: inherit;
    }

  body {
    margin: 0;
    font-family: 'Poppins', 'sans-serif';
  }
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [temps, setTemps] = useState([]);

  useEffect(() => {
    const savedName = localStorage.getItem('name');
    const savedCity = localStorage.getItem('city');

    if (savedName && savedCity) {
      console.log('It worked!')
      handleLogin(null, savedCity, savedName);
    } else {
      setLoading(false);
    }
  }, [])

  const handleLogin = async (e, city, name) => {

    e && e.preventDefault();

    setName(name);
    localStorage.setItem('name', name);

    setCity(city);
    localStorage.setItem('city', city);

    setLoading(true);

    try {
      const temps = await axios.get(`http://localhost:5000?city=${city}`);
      setTemps(temps.data);
      setLoggedIn(true);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError(true);
      setLoading(false);
    }
  }

  if (error) {
    return (
      <div>
        <GlobalStyle />
        <Error />
      </div>
    )
  }
  
  if (loading) {
    return <Loading />
  }
 
  return (
    <Container>
      <GlobalStyle />
      {loggedIn ? <Forecast 
        name={name}
        city={city}
        temps={temps}
      /> 
      : 
      <LogIn handleLogin={handleLogin}/>}
    </Container>
  )
}

export default App;
