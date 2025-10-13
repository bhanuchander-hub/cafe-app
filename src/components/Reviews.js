const people = Array.from({length:10}).map((_,i)=> ({
  name:`User ${i+1}`,
  text:'Amazing coffee and warm atmosphere. Highly recommended!',
  rating:5,
  img:`https://i.pravatar.cc/80?img=${i+1}`
}));

const Star = () => <i className="bi bi-star-fill text-warning"></i>;

export default function Reviews(){
  return (
    <section className="section" id="reviews" aria-label="Customer reviews">
      <div className="container">
        <h2 className="section-title">Reviews</h2>
        <div id="reviewsCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {people.map((p,i)=> (
              <div key={i} className={`carousel-item ${i===0?'active':''}`}>
                <div className="card bg-dark border-secondary mx-auto" style={{maxWidth:720}}>
                  <div className="card-body d-flex gap-3 align-items-center">
                    <img src={p.img} alt={`${p.name} avatar`} className="rounded-circle" width={64} height={64} />
                    <div>
                      <h6 className="mb-1">{p.name}</h6>
                      <p className="mb-2 text-secondary">{p.text}</p>
                      <div className="d-flex gap-1" aria-label="rating">
                        {Array.from({length:p.rating}).map((_,j)=> <Star key={j} />)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#reviewsCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#reviewsCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
}


