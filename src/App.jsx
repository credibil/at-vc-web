import { useState } from 'react'

import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Viewport from './Viewport';

import { custom } from './theme';
import { Home } from './views/Home';
import { Login } from './views/Login';
import { Profile } from './views/Profile';
import { Create } from './views/Create';

let theme = createTheme(custom);
theme = responsiveFontSizes(theme)

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Viewport>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />

            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/create" element={<Create />} />
          </Routes>
        </Viewport>
      </Router>
    </ThemeProvider>
  )
}

export default App
