import { useState } from 'react';
import LogIn from './LogIn';
import Forecast from './Forecast';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
 
  if (loggedIn) {
    return <Forecast />
  } else {
    return <LogIn />
  }
}

export default App;
