import styled from 'styled-components';

const Card = styled.figure`
  position:relative; overflow:hidden; border-radius:12px; margin:0; aspect-ratio:1;
  background:${({theme})=>theme.colors.surface}; border:1px solid #242424;
  img{ width:100%; height:100%; object-fit:cover; transition: transform .35s ease, filter .35s ease; }
  &:hover img{ transform:scale(1.05); filter:saturate(1.08) contrast(1.05); }
`;

export default function Gallery() {
  const sources = [
    '/images/0e894550d8da223ca19d997f7c57c242.jpg',
    '/images/1ed89f8ed276926c901f4defe887a1f0.jpg',
    '/images/2f5f49d6d6171d05c3d8329a62d8745e.jpg',
    '/images/4afcd2d60e252b15fd027ae60c0388c3.jpg',
    '/images/4c28e2420bf38c50120dba0cbaf42e8d.jpg',
    '/images/4cfd447cc662cccac2348b5838cef536.jpg',
    '/images/5cfd93bf09153e97707fff073ccd309c.jpg',
    '/images/8d75b5eec768f8063b4be2858728f1c4.jpg',
    '/images/206c16f3c0026aa8ddd68e980ab6401e.jpg',
    '/images/243b8f4b3165c35a79d7b08b01318c79.jpg',
    '/images/52799a0b22e277369d80f08bdd663745.jpg',
    '/images/bee0dbf653b82e241b3369e7bc2c0d62.jpg',
    '/images/e1ecbd57fe3a2beb805281906bff04d3.jpg',
    '/images/f0655f2737da76be9b4ac435c65e3d9b.jpg',
    '/images/f4775347f46961b2ccf9a86ba55468d5.jpg'
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


