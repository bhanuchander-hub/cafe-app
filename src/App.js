import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles, { theme } from './GlobalStyles';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Gallery from './components/Gallery';
import SpecialsCarousel from './components/SpecialsCarousel';
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
                <Hero />
                <SpecialsCarousel />
                <Menu />
                <About />
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
