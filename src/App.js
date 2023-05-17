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
import NotFound from './Screens/NotFound';
import Testing from './Screens/Testing';
import About2 from './Screens/About2/About2';


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
      fontWeight: 400
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
        <Route path='/testing' element={<Testing />} />
        <Route path='/about2' element={<About2 />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
