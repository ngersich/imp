import './App.css';
import {Route, Routes} from 'react-router-dom';
import React from 'react';
import {createTheme, ThemeProvider} from '@mui/material';
import About from './Screens/About';
import HowToJoin from './Screens/HowToJoin';
import Mission from './Screens/Mission';
import Overview from './Screens/Overview';
import Recognition from './Screens/Recognition';
import Styles from './Screens/Styles';
import ImageGroup from './Components/ImageGroup/ImageGroup';
import MasonryImageList from './Components/ImageGroup/ImageGroup2';
import Footer from './Components/Footer/Footer';

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
      fontSize: '1.2rem'
    },
    h3: {
      color: "#13294C",
      fontWeight: 500
    },
    h5: {
      color: "#ffffff"
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
        <Route path='/styles' element={<Styles />} />
        <Route path='/' element={<About/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/join' element={<HowToJoin/>} />
        <Route path='/mission' element={<Mission/>} />
        <Route path='/overview' element={<Overview/>} />
        <Route path='/recognition' element={<Recognition/>} />
        <Route path='/imagegroup' element={<ImageGroup />} />
        <Route path='/imagelist' element={<MasonryImageList/>} />
        <Route path='/footer' element={<Footer />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
