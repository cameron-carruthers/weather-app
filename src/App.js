import { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import LogIn from './LogIn';
import Forecast from './Forecast';

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
 
  return (
    <Container>
      <GlobalStyle />
      {loggedIn ? <Forecast /> : <LogIn />}
    </Container>
  )
}

export default App;
