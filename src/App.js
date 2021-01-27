import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import axios from 'axios';
import { DateTime } from 'luxon';
import LogIn from './LogIn';
import Forecast from './Forecast';
import { apiKey } from './key';
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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [temps, setTemps] = useState([]);

  const handleLogin = async (e, city, name) => {

    e.preventDefault();
    setName(name);
    setCity(city);
    setLoading(true);

    try {
      const res = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`);

      const result = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${res.data[0].lat}&lon=${res.data[0].lon}&exclude=hourly,minutely&appid=${apiKey}&units=imperial`);

      console.log('result', result);

      const arrayOfTemps = result.data.daily.map((element) => {

        const ISO = new Date(element.dt * 1000).toISOString();

        return ({
          temp: Math.floor(element.temp.day),
          day: DateTime.fromISO(ISO).toFormat('cccc'),
          date: DateTime.fromISO(ISO).toFormat('DDD')
        })
      });

      setTemps(arrayOfTemps.slice(0, 5));
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
