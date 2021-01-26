import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import axios from 'axios';
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
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleLogin = (e, city, name) => {
    e.preventDefault();
    setLoading(true);
    axios.get(`api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`)
      .then((data) => {
        console.log('data', data);
        setUsername(name);
        setLoggedIn(true);
        setLoading(false);
      }).catch((err) => {
        console.error(err);
        setError(true);
        setLoading(false);
      })
  }

  if (error) {
    return <Error />
  }
  
  if (loading) {
    return <Loading />
  }
 
  return (
    <Container>
      <GlobalStyle />
      {loggedIn ? <Forecast username={username}/> : <LogIn handleLogin={handleLogin}/>}
    </Container>
  )
}

export default App;
