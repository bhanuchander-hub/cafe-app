import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header(){
  const [scrolled, setScrolled] = useState(false);
  useEffect(()=>{
    const onScroll = ()=> setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive:true });
    onScroll();
    return ()=> window.removeEventListener('scroll', onScroll);
  },[]);

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark ${scrolled? 'shadow-sm':''}`} style={{background:'#0f0f0f', position:'sticky', top:0, zIndex:20}}>
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <span className="d-inline-grid place-items-center bg-warning text-dark fw-bold" style={{width:32,height:32,borderRadius:8}}>CI</span>
          <span className="fw-semibold">Cafe Italian</span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMain" aria-controls="navMain" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navMain">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item"><NavLink end className="nav-link" to="/">Home</NavLink></li>
            <li className="nav-item"><a className="nav-link" href="#menu">Menu</a></li>
        
            <li className="nav-item"><NavLink className="nav-link" to="/gallery">Gallery</NavLink></li>
            <li className="nav-item"><a className="nav-link" href="#reviews">Reviews</a></li>
            <li className="nav-item"><NavLink className="nav-link" to="/booking">Book a Table</NavLink></li>
    
          </ul>
        </div>
      </div>
    </nav>
  );
}


