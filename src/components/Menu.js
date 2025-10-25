import styled from 'styled-components';



const menuData = [
  { 
    name: 'Espresso', 
    desc: 'Rich and bold single shot', 
    price: '$3',
    image: '/images/1ed89f8ed276926c901f4defe887a1f0.jpg' 
  },
  { 
    name: 'Cappuccino', 
    desc: 'Espresso with velvety foam', 
    price: '$4.5',
    image: '/images/f4775347f46961b2ccf9a86ba55468d5.jpg'
  },
  { 
    name: 'Latte', 
    desc: 'Smooth espresso with steamed milk', 
    price: '$4.5',
    image: '/images/f0655f2737da76be9b4ac435c65e3d9b.jpg'
  },
  { 
    name: 'Affogato', 
    desc: 'Vanilla gelato drenched in espresso', 
    price: '$5',
    image: '/images/4c28e2420bf38c50120dba0cbaf42e8d.jpg'
  },
  { 
    name: 'Tiramisu', 
    desc: 'Classic Italian dessert', 
    price: '$6',
    image: '/images/52799a0b22e277369d80f08bdd663745.jpg'
  },
  { 
    name: 'Cannoli', 
    desc: 'Crisp shell, ricotta cream', 
    price: '$5',
    image: '/images/5cfd93bf09153e97707fff073ccd309c.jpg'
  }
];


const CardImgTop = styled.img`
  object-fit: cover;
  height: 160px;
`;

const Star = () => <i className="bi bi-star-fill text-warning"></i>;


export default function Menu() {
  
 
  return (
    <section id="menu" className="section">
      <div className="container">
        
       
        <div className="row g-3">
          {menuData.map((item) => (
            <div className="col-12 col-md-6 col-lg-4" key={item.name}>
              <div className="card bg-dark border-secondary h-100">
                <CardImgTop src={item.image} alt={item.name} className="card-img-top transition-soft"/>
                <div className="card-body d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <h5 className="card-title mb-0">{item.name}</h5>
                    <span className="text-warning fw-semibold">{item.price}</span>
                  </div>
                  <p className="card-text text-secondary">{item.desc}</p>
                  <div className="mt-auto d-flex gap-1" aria-label="5 out of 5 stars">
               
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i}/>)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      

      </div>
    </section>
  );
};