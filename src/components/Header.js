// 👇 We no longer need useRef
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  
  // 👇 1. Create a state to track if the menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // 👇 2. A simple handler to close the menu
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // 👇 3. A handler for the toggle button itself
  const handleToggleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark ${scrolled ? 'shadow-sm' : ''}`}
      style={{ background: '#0f0f0f', position: 'sticky', top: 0, zIndex: 20 }}
    >
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <img
            src="https://i.pinimg.com/736x/ad/d2/bb/add2bbc8671e8158d0442b99c8153276.jpg"
            alt="Cafe Italian Logo"
            style={{ width: 32, height: 32, borderRadius: 8 }}
          />
          <span className="fw-semibold">Cafe Italian</span>
        </Link>

        {/* 👇 4. Change the button to use our React state */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggleClick} // Use our React click handler
          aria-controls="navMain"
          aria-expanded={isMenuOpen} // This is now dynamic
          aria-label="Toggle navigation"
          // We NO LONGER need data-bs-toggle or data-bs-target
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* 👇 5. Manually add the 'show' class based on our state */}
        <div
          className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}
          id="navMain"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {/* 👇 6. Add the simpler onClick to all links */}
            <li className="nav-item">
              <NavLink end className="nav-link" to="/" onClick={handleLinkClick}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#menu" onClick={handleLinkClick}>
                Menu
              </a>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/gallery" onClick={handleLinkClick}>
                Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#reviews" onClick={handleLinkClick}>
                Reviews
              </a>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/booking" onClick={handleLinkClick}>
                Book a Table
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}