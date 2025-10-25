import styled from 'styled-components';

export const SpecialsSection = styled.section`
  background: #000;
  color: #fff;
  padding: 80px 20px;
  text-align: center;
  position: relative;
  overflow: hidden; // Ensures items outside the view are clipped
`;

export const SectionSubtitle = styled.p`
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #aaa;
  margin-bottom: 8px;
`;

export const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif; // Example: use a fancy font
  font-size: clamp(40px, 8vw, 72px);
  font-style: italic;
  color: #C9933A; // Gold color
  margin-bottom: 60px;
  text-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
`;

export const SpecialsCarousel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px; // Space between cards
  position: relative;
  width: 100%;
  padding: 0 50px; // Desktop padding
  
  /* * IMPROVEMENT 1: 
   * Changed breakpoint from 768px to 920px.
   * This targets tablets and any screen not wide enough 
   * for the 3-card (scaled) desktop view.
  */
  @media (max-width: 920px) {
    justify-content: flex-start; // Align left to allow scrolling
    overflow-x: auto; // Enable horizontal scrolling
    scroll-snap-type: x mandatory; // Snap to cards
    -webkit-overflow-scrolling: touch; // Smooth scrolling on iOS
    padding: 0 20px; // Adjust padding for mobile/tablet
  }
`;

export const SpecialCard = styled.div`
  position: relative;
  background: #1a1a1a;
  border-radius: 12px;
  width: 300px; // Fixed width for desktop
  flex-shrink: 0; // Prevent cards from shrinking
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  transform: scale(0.8); // Smaller for non-active items
  opacity: 0.5; // Faded for non-active items
  scroll-snap-align: center; // Helps with snapping in carousel

  &.active {
    transform: scale(1);
    opacity: 1;
    z-index: 10;
    box-shadow: 0 0 40px rgba(201, 147, 58, 0.3); // Glow for active item
  }

  &:before {
    content: '';
    position: absolute;
    top: -20px; 
    width: 100%;
    height: 80px; 
    background: #1a1a1a;
    border-radius: 0 0 50% 50% / 0 0 100% 100%;
    transform: scaleX(0.9);
    z-index: -1;
  }

  /* * IMPROVEMENT 2: 
   * Added this media query to make the card flexible
   * on smaller screens (inside the scroll view).
   * It will be 80% of the screen width, but no wider than 300px.
  */
  @media (max-width: 920px) {
    /* * On mobile/tablet, reset the desktop scaling.
     * We want all cards in the scroll view to be the same size.
    */
    transform: scale(1);
    opacity: 1;
    
    /* Make card width flexible for small phones */
    width: 80vw;
    max-width: 300px; 
  }
`;

export const CardImageWrapper = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: #000; // Background for the dish image
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-top: 30px; // Space from the top edge
  margin-bottom: 20px;
  box-shadow: 0 0 0 8px #1a1a1a; // Inner border effect
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.1); // Slightly zoom image
`;

export const PriceTag = styled.div`
  position: absolute;
  top: 40px;
  right: 40px;
  background: #C9933A; // Gold for price tag
  color: #1a1a1a; // Dark text for price
  border-radius: 50%;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 18px;
  transform: rotate(5deg);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
`;

export const CardTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 5px;
  color: #fff;
`;

export const CardDescription = styled.p`
  font-size: 14px;
  color: #aaa;
  margin-bottom: 20px;
  max-width: 80%;
`;

export const NavButtonContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 40px;
  justify-content: center;
`;

export const NavButton = styled.button`
  background: #2b2b2b;
  border: 1px solid #444;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #C9933A;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #C9933A;
    color: #1a1a1a;
    border-color: #C9933A;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    background: #2b2b2b;
    color: #888;
    border-color: #444;
  }
`;