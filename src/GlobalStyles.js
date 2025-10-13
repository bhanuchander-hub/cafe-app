import { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    bg: '#0f0f0f',
    surface: '#151515',
    text: '#f3f3f3',
    muted: '#b8b8b8',
    accent: '#c9933a',
    accent2: '#7a5320',
  },
  layout: {
    container: '1080px',
    radius: '12px',
    gap: '16px',
  },
  shadow: '0 10px 26px rgba(0,0,0,.35)'
};

const GlobalStyles = createGlobalStyle`
  :root{
    --container:${({ theme }) => theme.layout.container};
  }
  *, *::before, *::after { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body {
    margin: 0;
    background: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.text};
    font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  img { max-width: 100%; display: block; }
  button, input, textarea, select { font: inherit; }

  /* Utility classes ported from App.css */
  .container { width: 100%; max-width: var(--container); margin: 0 auto; padding: 0 20px; }
  .section { padding: 72px 0; }
  .section-title { font-size: 32px; letter-spacing: .5px; margin: 0 0 28px; }

  /* Smooth transitions and motion preferences */
  .transition-soft { transition: all .3s ease-in-out; }
  img.transition-soft { transition: transform .3s ease-in-out, filter .3s ease-in-out, opacity .3s ease-in-out; }
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after { transition: none !important; animation: none !important; }
  }
`;

export default GlobalStyles;


