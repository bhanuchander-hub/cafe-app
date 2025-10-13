import styled from 'styled-components';

const Wrap = styled.section` padding:72px 0; `;

export default function Booking(){
  return (
    <Wrap>
      <div className="container">
        <h2 className="section-title">Book a Table</h2>
        <form className="bg-dark border border-secondary rounded p-3" style={{maxWidth:640, margin:'0 auto'}} onSubmit={(e)=> e.preventDefault()} aria-label="Booking form">
          <div className="row g-2">
            <div className="col-12 col-md-6">
              <label htmlFor="name" className="form-label">Name</label>
              <input id="name" className="form-control" placeholder="Your name" required />
            </div>
            <div className="col-12 col-md-6">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input id="phone" className="form-control" placeholder="(555) 012-3456" required />
            </div>
            <div className="col-12 col-md-6">
              <label htmlFor="date" className="form-label">Date</label>
              <input id="date" type="date" className="form-control" required />
            </div>
            <div className="col-12 col-md-6">
              <label htmlFor="time" className="form-label">Time</label>
              <input id="time" type="time" className="form-control" required />
            </div>
          </div>
          <button className="btn btn-warning text-dark mt-3" type="submit">Book Now</button>
        </form>
      </div>
    </Wrap>
  );
}


