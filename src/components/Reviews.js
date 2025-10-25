import React from 'react';


const reviewsData = [
  {
    name: 'Elena Rossi',
    text: 'Absolutely authentic! The espresso was perfect, just like in Rome. The atmosphere is cozy and warm. Will be back!',
    rating: 5,
    img: 'https://i.pravatar.cc/80?img=1'
  },
  {
    name: 'Mark Thompson',
    text: 'Great place for a cappuccino and a cannoli. The staff was friendly, and the service was quick. Highly recommended.',
    rating: 5,
    img: 'https://i.pravatar.cc/80?img=2'
  },
  {
    name: 'Sarah Chen',
    text: 'Good coffee, but the music was a bit loud for a morning meeting. The tiramisu, however, was 10/10!',
    rating: 4,
    img: 'https://i.pravatar.cc/80?img=3'
  },
  {
    name: 'David Kim',
    text: 'A lovely hidden gem. The affogato was a perfect afternoon treat. I appreciated the quiet corner to read.',
    rating: 5,
    img: 'https://i.pravatar.cc/80?img=4'
  }
];

const Star = () => <i className="bi bi-star-fill text-warning"></i>;


export default function Reviews() {
  return (
    <section className="section" id="reviews" aria-label="Customer reviews">
      <div className="container">
        <h2 className="section-title">What Our Customers Say</h2>

        <div id="reviewsCarousel" className="carousel slide" data-bs-ride="carousel">
          
         
          <div className="carousel-inner">
            
           
            {reviewsData.map((review, index) => (
              
         
              <div key={review.name} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                
               
                <div className="card bg-dark border-secondary mx-auto" style={{ maxWidth: 720 }}>
                  <div className="card-body d-flex gap-3 align-items-center">
                    
                    <img 
                      src={review.img} 
                      alt={`${review.name} avatar`}
                      className="rounded-circle" 
                      width={64} 
                      height={64} 
                    />
                    
                    <div>
                      <h5 className="mb-1 text-warning">{review.name}</h5>
                      <p className="mb-2 text-secondary">{review.text}</p>
                      
                   
                      <div className="d-flex gap-1" aria-label={`Rating: ${review.rating} out of 5 stars`}>
                        {Array.from({ length: review.rating }).map((_, i) => <Star key={i} />)}
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
};