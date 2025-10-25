import styled, { keyframes } from 'styled-components';


const fadeInUp = keyframes`
  to {
    opacity: 1;
    transform: none;
  }
`;

export const HeroWrap = styled.section`
  position: relative;
  min-height: 72vh;
  display: grid;
  align-items: center;
  overflow: hidden;
`;

export const HeroMedia = styled.div`
  position: absolute;
  inset: 0;
  background:
    radial-gradient(1200px 400px at 10% 10%, rgba(201,147,58,.15), transparent 60%),
    radial-gradient(900px 300px at 90% 20%, rgba(122,83,32,.14), transparent 60%),
    url('https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1600&auto=format&fit=crop') center/cover no-repeat;
  filter: saturate(1.1) contrast(1.02) brightness(.72);
  
  &:after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(15,15,15,.75), rgba(15,15,15,.25));
  }
`;


export const HeroInner = styled.div`
  position: relative;
  padding: 80px 20px;
  width: 100%;
  max-width: var(--container); // Assumes --container is a CSS variable (e.g., 1140px)
  margin: 0 auto;
`;

export const Title = styled.h1`
  margin: 0 0 12px;
  font-size: clamp(36px, 6vw, 64px);
  line-height: 1.05;
  text-shadow: 0 2px 24px rgba(0,0,0,.35);
  
  opacity: 0;
  transform: translateY(10px);
  animation: ${fadeInUp} .7s ease forwards;
`;


export const Sub = styled.p`
  margin: 0 0 24px;
  max-width: 620px;
  color: ${({theme}) => theme.colors.muted}; // Uses theme provider
  
  opacity: 0;
  transform: translateY(10px);
  animation: ${fadeInUp} .7s ease forwards;
  animation-delay: .12s;
`;


export const Actions = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  
  opacity: 0;
  transform: translateY(10px);
  animation: ${fadeInUp} .7s ease forwards;
  animation-delay: .22s;
`;


export const Btn = styled.a`
  display: inline-block;
  padding: 10px 16px;
  border-radius: 10px;
  border: 1px solid #2b2b2b;
  text-decoration: none;
  
  
  background: ${({$primary, theme}) => $primary ? theme.colors.accent : 'transparent'};
  color: ${({$primary}) => $primary ? '#1a1a1a' : 'inherit'};
  
  transition: transform .2s ease, background .2s ease;

  &:hover {

    background: ${({$primary, theme}) => $primary ? theme.colors.accent + 'dd' : 'rgba(255,255,255, 0.08)'};
    transform: translateY(-2px); 

    box-shadow: ${({$primary, theme}) => $primary 
      ? `0 0 20px 5px ${theme.colors.accent}70`  
      : `0 0 20px 5px rgba(255, 255, 255, 0.15)` 
    };
  }

  &:active {
    transform: translateY(1px);
  }
`;

export default function Home() {
  return (
    <HeroWrap id="hero">
      <HeroMedia aria-hidden="true" />
      <HeroInner>
        <Title>Taste Italy in Every Sip</Title>
        <Sub>Freshly roasted beans, artisanal pastries, and warm hospitality.</Sub>
        <Actions>
          <Btn href="#menu" $primary>Explore Menu</Btn>
          <Btn href="#booking">Book a Table</Btn>
        </Actions>
      </HeroInner>
    </HeroWrap>
  );
}


