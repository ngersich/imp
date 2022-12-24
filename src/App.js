import './App.css';
import {Route, Routes} from 'react-router-dom';
import React from 'react';
import {createTheme, ThemeProvider} from '@mui/material';
import About from './Screens/About';
import HowToJoin from './Screens/HowToJoin';
import Mission from './Screens/Mission';
import Overview from './Screens/Overview';
import Recognition from './Screens/Recognition';

const theme = createTheme({
  palette: {
    primary: {
      main: '#13294C',
    },
    secondary: {
      main: '#dc5034',
      contrastText: "#fff"
    },
  },
  typography: {
    h2: {
      color: "#13294C",
    },
    h3: {
      color: "#13294C",
      fontWeight: 500
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/' element={<About/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/join' element={<HowToJoin/>} />
        <Route path='/mission' element={<Mission/>} />
        <Route path='/overview' element={<Overview/>} />
        <Route path='/recognition' element={<Recognition/>} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
