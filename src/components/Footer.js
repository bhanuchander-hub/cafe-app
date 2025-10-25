export default function Footer() {
  return (
    <footer className="mt-5" style={{background:'#0e0e0e', borderTop:'1px solid #1f1f1f'}}>
      <div className="container py-4">
        <div className="row align-items-center g-3">
          <div className="col-12 col-md-4 d-flex align-items-center gap-2">
          <img 
  src="https://i.pinimg.com/736x/ad/d2/bb/add2bbc8671e8158d0442b99c8153276.jpg" 
  alt="Cafe Italian Logo"
  style={{width:32,height:32,borderRadius:8}}
/>            <span className="fw-semibold">Cafe Italian</span>
          </div>
          <div className="col-12 col-md-4">
            <div className="d-flex gap-3">
              <a className="text-secondary" href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
              <a className="text-secondary" href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
              <a className="text-secondary" href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><i className="bi bi-twitter-x"></i></a>
            </div>
          </div>
          <div className="col-12 col-md-4 text-secondary">
            <h2 className="section-title">Contact</h2>
            <div>Phone: +(91) 8937273921 </div>
            <div>Location: 2-119 Mangalagiri, Amaravathi</div>
            <div>Hours: Mon–Sun 7:00–22:00</div>
          </div>
        </div>
      </div>
    </footer>
  );
}


