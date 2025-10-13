import styled from 'styled-components';

const Card = styled.figure`
  position:relative; overflow:hidden; border-radius:12px; margin:0; aspect-ratio:1;
  background:${({theme})=>theme.colors.surface}; border:1px solid #242424;
  img{ width:100%; height:100%; object-fit:cover; transition: transform .35s ease, filter .35s ease; }
  &:hover img{ transform:scale(1.05); filter:saturate(1.08) contrast(1.05); }
`;

export default function Gallery() {
  const sources = [
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1464979685496-67c9e472a79b?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1498654200943-1088dd4438ae?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1447078806655-40579c2520d6?q=80&w=800&auto=format&fit=crop'
  ];
  const photos = sources;
  return (
    <section id="gallery" className="section">
      <div className="container">
        <h2 className="section-title">Gallery</h2>
        <div className="row row-cols-2 row-cols-md-3 g-2 g-md-3">
          {photos.map((src, idx) => (
            <div className="col" key={idx}>
              <Card>
                <img src={src} alt={`Cafe ambiance ${idx+1}`} loading="lazy" className="transition-soft" />
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


