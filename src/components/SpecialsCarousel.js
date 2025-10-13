import styled from 'styled-components';

const Wrap = styled.section` padding:72px 0; `;

const dishImages = [
  'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1464979685496-67c9e472a79b?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1498654200943-1088dd4438ae?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1200&auto=format&fit=crop'
];

const dishes = Array.from({length:10}).map((_,i)=> ({
  title:`Signature Dish ${i+1}`,
  desc:'A delightful specialty crafted by our chef.',
  price:`$${(12+i).toFixed(2)}`,
  img:dishImages[i]
}));

export default function SpecialsCarousel(){
  // group dishes into slides (3 per slide for desktop)
  const perSlide = 3;
  const slides = Array.from({ length: Math.ceil(dishes.length / perSlide) }, (_, i) =>
    dishes.slice(i * perSlide, i * perSlide + perSlide)
  );

  return (
    <Wrap id="specials">
      <div className="container">
        <h2 className="section-title">Our Specials</h2>
        <div id="specialsCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {slides.map((group, slideIdx)=> (
              <div key={slideIdx} className={`carousel-item ${slideIdx===0?'active':''}`}>
                <div className="row g-3">
                  {group.map((d,i)=> (
                    <div className="col-12 col-md-6 col-lg-4" key={d.title + i}>
                      <div className="card bg-dark border-secondary h-100">
                        <img src={d.img} className="card-img-top rounded-top transition-soft" alt={d.title} style={{height:180, objectFit:'cover'}} />
                        <div className="card-body d-flex flex-column">
                          <h5 className="card-title mb-1">{d.title}</h5>
                          <p className="card-text text-secondary mb-2">{d.desc}</p>
                          <span className="badge bg-warning text-dark mt-auto align-self-start">{d.price}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#specialsCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#specialsCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </Wrap>
  );
}


