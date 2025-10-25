import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles, { theme } from './GlobalStyles';
import Header from './components/Header';
import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About';
import Gallery from './components/Gallery';
import Specials from './components/Specials';
import Reviews from './components/Reviews';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <div className="app-root">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<>
                <Home />
                <Specials />
                <Menu />
                <About />
                <Booking />
                <Gallery />
               
                <Reviews />
                 
                
              </>} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/booking" element={<Booking />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
