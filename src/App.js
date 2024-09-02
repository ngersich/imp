import './App.css';
import {Route, Routes} from 'react-router-dom';
import React from 'react';
import {createTheme, ThemeProvider} from '@mui/material';
import About2 from './Screens/About2/About2';
import Overview2 from './Screens/Overview2/Overview2';
import HowToJoin2 from './Screens/HowToJoin2/HowToJoin2';
import Exec2 from './Screens/Exec2/Exec2';
import NotFound2 from './Screens/NotFound2/NotFound2';
import Gallery2 from './Screens/Gallery2/Gallery2';


const theme = createTheme({
  palette: {
    primary: {
      main: '#13294C',
      faint: '#7E8699'
    },
    secondary: {
      main: '#dc5034',
      faint: '#D59180',
      contrastText: "#fff"
    },
    googleForm: {
      main: '#710ebe'
    },
    backgroundGrey: {
      light: '#e9e9e9'
    }
  },
  typography: {
    body1: {
      fontSize: '1.1rem'
    },
    h1: {
      fontWeight: 400,
      fontSize: '5rem'
    },
    h3: {
      color: "#13294C",
      fontWeight: 500
    },
    h6: {
      color: "#dc5034",
      fontWeight: 400,
      fontSize: "0.98rem"
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/' element={<About2/>} />
        <Route path='/about' element={<About2/>} />
        <Route path='/join' element={<HowToJoin2/>} />
        <Route path='/overview' element={<Overview2/>} />
        <Route path='/exec' element={<Exec2 />} />
        <Route path='/gallery' element={<Gallery2 />} />
        <Route path='*' element={<NotFound2 />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
