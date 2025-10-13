import styled from 'styled-components';
import {useRef, useState } from 'react';

const items = [
  { name: 'Espresso', desc: 'Rich and bold single shot', price: '$3' },
  { name: 'Cappuccino', desc: 'Espresso with velvety foam', price: '$4.5' },
  { name: 'Latte', desc: 'Smooth espresso with steamed milk', price: '$4.5' },
  { name: 'Affogato', desc: 'Vanilla gelato drenched in espresso', price: '$5' },
  { name: 'Tiramisu', desc: 'Classic Italian dessert', price: '$6' },
  { name: 'Cannoli', desc: 'Crisp shell, ricotta cream', price: '$5' }
];

// Unique, optimized food/cafe images (no repeats site-wide)
const menuImages = [
  'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1498654200943-1088dd4438ae?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?q=80&w=1200&auto=format&fit=crop'
];

const CardImgTop = styled.img`object-fit:cover; height:160px;`;
const Star = () => <i className="bi bi-star-fill text-warning"></i>;

export default function Menu() {
  const formRef = useRef(null);
  const triggerRef = useRef(null);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;
    if (!form.checkValidity()) {
      e.stopPropagation();
      setValidated(true);
      return;
    }
    // Success: close modal, reset form, show toast
    try {
      const bs = window.bootstrap;
      const modalEl = document.getElementById('bookTableModal');
      if (bs?.Modal && modalEl) {
        bs.Modal.getOrCreateInstance(modalEl).hide();
      }
      // Ensure focus leaves the hidden modal
      if (document.activeElement && document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
      form.reset();
      setValidated(false);
      const toastEl = document.getElementById('bookingToast');
      if (bs?.Toast && toastEl) {
        bs.Toast.getOrCreateInstance(toastEl).show();
      }
      // Return focus to the trigger button after hide animation
      setTimeout(()=>{ triggerRef.current?.focus?.(); }, 200);
    } catch(_){}
  };
  return (
    <section id="menu" className="section">
      <div className="container">
        <h2 className="section-title">Menu</h2>
        <div className="row g-3">
          {items.map((it, idx) => (
            <div className="col-12 col-md-6 col-lg-4" key={it.name}>
              <div className="card bg-dark border-secondary h-100">
                <CardImgTop src={menuImages[idx % menuImages.length]} alt={it.name} className="card-img-top transition-soft"/>
                <div className="card-body d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <h5 className="card-title mb-0">{it.name}</h5>
                    <span className="text-warning fw-semibold">{it.price}</span>
                  </div>
                  <p className="card-text text-secondary">{it.desc}</p>
                  <div className="mt-auto d-flex gap-1" aria-label="rating">
                    {Array.from({length:5}).map((_,i)=> <Star key={i}/>) }
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Booking Section */}
        <div className="mt-4 p-4 rounded position-relative overflow-hidden" style={{background:'#111'}}>
          <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop" alt="Cozy cafe seating" className="w-100 rounded transition-soft" style={{opacity:.2, position:'absolute', inset:0, objectFit:'cover'}} />
          <div className="position-relative">
            <h3 className="mb-2">Reserve Your Table</h3>
            <p className="text-secondary mb-3">Book a cozy spot and enjoy authentic Italian flavors.</p>
            <button ref={triggerRef} className="btn btn-warning text-dark" data-bs-toggle="modal" data-bs-target="#bookTableModal">Book Table</button>
          </div>
        </div>

        {/* Modal */}
        <div className="modal fade" id="bookTableModal" tabIndex="-1" aria-labelledby="bookTableLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content bg-dark text-light border-secondary">
              <div className="modal-header">
                <h5 className="modal-title" id="bookTableLabel">Book a Table</h5>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <form ref={formRef} className={`needs-validation ${validated? 'was-validated':''}`} noValidate onSubmit={handleSubmit}>
                <div className="modal-body">
                  <div className="row g-2">
                    <div className="col-12">
                      <label className="form-label" htmlFor="bName">Name</label>
                      <input id="bName" className="form-control" required />
                      <div className="invalid-feedback">Please enter your name.</div>
                    </div>
                    <div className="col-12">
                      <label className="form-label" htmlFor="bEmail">Email</label>
                      <input id="bEmail" type="email" className="form-control" required />
                      <div className="invalid-feedback">Please enter a valid email.</div>
                    </div>
                    <div className="col-12">
                      <label className="form-label" htmlFor="bPhone">Phone Number</label>
                      <input id="bPhone" className="form-control" required pattern="[0-9()+\-\s]+" />
                      <div className="invalid-feedback">Please enter a valid phone.</div>
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label" htmlFor="bDate">Date</label>
                      <input id="bDate" type="date" className="form-control" required />
                      <div className="invalid-feedback">Select a date.</div>
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label" htmlFor="bTime">Time</label>
                      <input id="bTime" type="time" className="form-control" required />
                      <div className="invalid-feedback">Select a time.</div>
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label" htmlFor="bGuests">Guests</label>
                      <select id="bGuests" className="form-select" required defaultValue="2">
                        {[1,2,3,4,5,6,7,8].map(n=> <option key={n} value={n}>{n}</option>)}
                      </select>
                      <div className="invalid-feedback">Select guests.</div>
                    </div>
                    <div className="col-12">
                      <label className="form-label" htmlFor="bNotes">Special Requests</label>
                      <textarea id="bNotes" className="form-control" rows="3" placeholder="Allergies, celebrations, etc."></textarea>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="submit" className="btn btn-warning text-dark">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Success Toast */}
        <div className="position-fixed bottom-0 end-0 p-3" style={{zIndex: 1080}}>
          <div id="bookingToast" className="toast text-bg-dark border border-secondary" role="status" aria-live="polite" aria-atomic="true" data-bs-delay="2500">
            <div className="toast-header bg-dark text-light border-secondary">
              <strong className="me-auto">Reservation</strong>
              <small>Just now</small>
              <button type="button" className="btn-close btn-close-white ms-2 mb-1" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div className="toast-body">
              Your table request was submitted. We will confirm shortly.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


