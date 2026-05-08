import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Lenis from 'lenis'

const Root = () => {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Custom Cursor Logic
    let cursor = document.getElementById('custom-cursor');
    if (!cursor) {
      cursor = document.createElement('div');
      cursor.id = 'custom-cursor';
      document.body.appendChild(cursor);
    }

    let halo = document.getElementById('custom-cursor-halo');
    if (!halo) {
      halo = document.createElement('div');
      halo.id = 'custom-cursor-halo';
      document.body.appendChild(halo);
    }

    const moveCursor = (e) => {
      if (cursor) cursor.style.transform = `translate3d(${e.clientX - 10}px, ${e.clientY - 10}px, 0)`;
      if (halo) halo.style.transform = `translate3d(${e.clientX - 20}px, ${e.clientY - 20}px, 0)`;
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      lenis.destroy();
      if (cursor && cursor.parentNode) cursor.parentNode.removeChild(cursor);
      if (halo && halo.parentNode) halo.parentNode.removeChild(halo);
    };
  }, [])

  return (
    <React.StrictMode>
      <div className="noise-overlay" />
      <div className="grid-overlay" />
      <App />
    </React.StrictMode>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Root />)
