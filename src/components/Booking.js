import styled from 'styled-components';

import { useRef, useState, useEffect } from 'react';

import { Modal, Toast } from 'bootstrap'; 

const Wrap = styled.section` padding:72px 0; `;
const Btn = styled.button`
  display: inline-block;
  padding: 10px 16px;
  border-radius: 10px;
  border: 1px solid #2b2b2b;
  text-decoration: none;
  background: ${({$primary, theme}) => $primary ? theme.colors.accent : 'transparent'};
  color: ${({$primary}) => $primary ? '#1a1a1a' : 'inherit'};
  transition: transform .2s ease, background .2s ease, box-shadow .2s ease;
  &:hover {
    background: ${({$primary, theme}) => $primary ? theme.colors.accent + 'dd' : 'rgba(255,255,255, 0.08)'};
    transform: translateY(-2px); 
    box-shadow: ${({$primary, theme}) => $primary 
      ? `0 0 20px 5px ${theme.colors.accent}70` 
      : `0 0 20px 5px rgba(255, 255, 255, 0.15)` 
    };
  }
  &:active {
    transform: translateY(1px);
  }
`;


export default function Booking() {
  const formRef = useRef(null);
  const triggerRef = useRef(null);

 
  const modalRef = useRef(null);
  const toastRef = useRef(null);
  
 
  const [modalInstance, setModalInstance] = useState(null);
  const [toastInstance, setToastInstance] = useState(null);

  const [validated, setValidated] = useState(false);


  useEffect(() => {
    
    if (typeof Modal !== 'undefined') {
      if (modalRef.current) {
        setModalInstance(new Modal(modalRef.current));
      }
      if (toastRef.current) {
        setToastInstance(new Toast(toastRef.current, { delay: 2500 }));
      }
    }
  }, []); 

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = formRef.current;

    if (!form.checkValidity()) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    try {
     
      modalInstance?.hide(); 

      if (document.activeElement && document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }

      form.reset();
      setValidated(false);

      toastInstance?.show();

      setTimeout(() => {
        triggerRef.current?.focus?.();
      }, 200);
    } catch (error) {
      console.error("Error handling form submission:", error);
    }
  };

  return (
    <section id="booking" className="text-center mb-5">
      <div className='container'>
        <Wrap>
          <div className="mt-4 p-4 rounded position-relative overflow-hidden" style={{ background: '#111', height: '50vh' }}>
            <img 
              src="/images/0e894550d8da223ca19d997f7c57c242.jpg" 
              alt="Cozy cafe seating" 
              className="w-100 rounded transition-soft" 
              style={{ opacity: .3, position: 'absolute', inset: 0, objectFit: 'cover' }} 
            />
            <div style={{
                    position: 'relative',
                    top: '100px',
                    left: '20px'
                  }}>
              <h3 className="mb-2">Reserve Your Table</h3>
              <p className="text-secondary mb-3">Book a cozy spot and enjoy authentic Italian flavors.</p>
              <Btn 
                ref={triggerRef} 
                className="btn btn-warning text-dark" 
                data-bs-toggle="modal" 
                data-bs-target="#bookTableModal" $primary
              >
                Book Table
              </Btn>
            </div>
          </div>

        
       
          <div ref={modalRef} className="modal fade" id="bookTableModal" tabIndex="-1" aria-labelledby="bookTableLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content bg-dark text-light border-secondary">
                <div className="modal-header">
                  <h5 className="modal-title" id="bookTableLabel">Book a Table</h5>
                  <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                
                
                <form 
                  ref={formRef} 
                  className={`needs-validation ${validated ? 'was-validated' : ''}`} 
                  noValidate 
                  onSubmit={handleSubmit}
                >
                 
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
                          {[1, 2, 3, 4, 5, 6, 7, 8].map(n => <option key={n} value={n}>{n}</option>)}
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
                    <Btn type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</Btn>
                    <Btn typeD="submit" className="btn btn-warning text-dark" $primary>Submit</Btn>
                  </div>
                </form>
              </div>
            </div>
          </div>

          
          <div className="position-fixed top-0 start-50 translate-middle-x p-3" style={{ zIndex: 1080 }}>
           
            <div ref={toastRef} id="bookingToast" className="toast text-bg-dark border border-secondary" role="status" aria-live="polite" aria-atomic="true" data-bs-delay="2500">
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

        </Wrap>
      </div>
    </section>
  );
};