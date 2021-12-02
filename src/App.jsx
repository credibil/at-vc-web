import { Suspense } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Viewport from './Viewport';
import { Outline } from './components/WaitSkeleton';

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
          <Suspense fallback={<Outline visible={true} />}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/Create" element={<Create />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/profile" element={<Profile />} />
            </Routes>
          </Suspense>
        </Viewport>
      </Router>
    </ThemeProvider>
  )
}

export default App
