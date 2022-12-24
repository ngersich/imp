import './App.css';
import {Route, Routes} from 'react-router-dom';
import React from 'react';
import {createTheme, ThemeProvider} from '@mui/material';
import Styles from './Screens/Styles';
import { fontWeight } from '@mui/system';
import Header from './Components/Header/Header';


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
        <Route path='/' element={<Styles/>} />
        <Route path="/header" element={<Header currentPage="How to Join"/>} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
