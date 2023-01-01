import './App.css';
import {Route, Routes} from 'react-router-dom';
import React from 'react';
import {createTheme, ThemeProvider} from '@mui/material';
import About from './Screens/About/About';
import HowToJoin from './Screens/HowToJoin/HowToJoin';
import Mission from './Screens/Mission';
import Overview from './Screens/Overview';
import Gallery from './Screens/Gallery';
import Exec from './Screens/Exec';


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
    body1: {
      fontSize: '1.1rem'
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
        <Route path='/' element={<About/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/join' element={<HowToJoin/>} />
        <Route path='/mission' element={<Mission/>} />
        <Route path='/overview' element={<Overview/>} />
        <Route path='/exec' element={<Exec />} />
        <Route path='/gallery' element={<Gallery />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
