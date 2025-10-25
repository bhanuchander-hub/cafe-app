import React, { useState, useRef, useEffect } from 'react'; 
import {
  SpecialsSection,
  SectionSubtitle,
  SectionTitle,
  SpecialsCarousel,
  SpecialCard,
  CardImageWrapper,
  CardImage,
  PriceTag,
  CardTitle,
  CardDescription,
  NavButtonContainer,
  NavButton
} from './Specials.styles';


const dishes = [
  {
    name: 'Espresso',
    price: '€30',
    image: '/images/1ed89f8ed276926c901f4defe887a1f0.jpg',
    description: 'The heart of Italian coffee.'
  },
  {
    name: 'Doppio',
    price: '€25',
    image: '/images/f4775347f46961b2ccf9a86ba55468d5.jpg',
    description: 'A robust double-shot of espresso for an extra jolt of intensity.'
  },
  {
    name: 'Macchiato',
    price: '€18',
    image: '/images/f0655f2737da76be9b4ac435c65e3d9b.jpg',
    description: 'Stained coffee. Espresso marked with a dollop of velvety, steamed milk foam.'
  },
  {
    name: 'Cappuccino',
    price: '€22',
    image: '/images/4c28e2420bf38c50120dba0cbaf42e8d.jpg',
    description: 'Equal parts espresso, steamed milk, and airy, fine foam. The traditional morning delight.'
  },
];

export default function Specials() {
  const [activeIndex, setActiveIndex] = useState(0);

 
  const carouselRef = useRef(null); 

  const cardRefs = useRef([]); 

  const goToPrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? dishes.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === dishes.length - 1 ? 0 : prevIndex + 1
    );
  };

  
  useEffect(() => {
    const activeCard = cardRefs.current[activeIndex];
    

    if (activeCard) {
     
      activeCard.scrollIntoView({
        behavior: 'smooth',  
        inline: 'center',    
        block: 'nearest'     
      });
    }
  }, [activeIndex]); 

  return (
    <SpecialsSection>
      <SectionSubtitle>Our Menu</SectionSubtitle>
      <SectionTitle>Our Specials</SectionTitle>

    
      <SpecialsCarousel ref={carouselRef}> 
        {dishes.map((dish, index) => (
          <SpecialCard
            key={dish.name}
            className={index === activeIndex ? 'active' : ''}
            
            ref={(el) => (cardRefs.current[index] = el)} 
          >
            <PriceTag>{dish.price}</PriceTag>
            <CardImageWrapper>
              <CardImage src={dish.image} alt={dish.name} />
            </CardImageWrapper>
            <CardTitle>{dish.name}</CardTitle>
            <CardDescription>{dish.description}</CardDescription>
          </SpecialCard>
        ))}
      </SpecialsCarousel>

      <NavButtonContainer>
        <NavButton onClick={goToPrev} aria-label="Previous Special">
          &larr;
        </NavButton>
        <NavButton onClick={goToNext} aria-label="Next Special">
          &rarr;
        </NavButton>
      </NavButtonContainer>
    </SpecialsSection>
  );
}