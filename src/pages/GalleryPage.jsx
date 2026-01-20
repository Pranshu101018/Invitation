

import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import allImg from '../assets/all.jpg';
import img6A from '../assets/6A.jpg';
import img6B from '../assets/6B.jpg';
import '../styles/GalleryWinter.css';

const images = [
  { src: img6B, alt: 'Batch 6B' },
  { src: allImg, alt: 'All Batch' },
  { src: img6A, alt: 'Batch 6A' },
]

const GalleryPage = () => {
  const [fullscreenIdx, setFullscreenIdx] = useState(null)
  const [isPaused, setIsPaused] = useState(false)
  const [offset, setOffset] = useState(0)
  const intervalRef = useRef()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setOffset(o => o + 1.1)
      }, 20)
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    return () => clearInterval(intervalRef.current)
  }, [isPaused])

  // Snowflake animation state
  const [snowflakes, setSnowflakes] = useState([]);
  useEffect(() => {
    // Generate 40 snowflakes with random positions, delays, and sizes
    setSnowflakes(Array.from({ length: 40 }, (_, i) => ({
      left: Math.random() * 100,
      delay: Math.random() * 6,
      duration: 5 + Math.random() * 5,
      size: 18 + Math.random() * 18,
      opacity: 0.7 + Math.random() * 0.3,
      char: ['❄', '✻', '✼', '❅', '❆'][Math.floor(Math.random() * 5)],
      key: i + '-' + Math.random().toString(36).slice(2),
    })));
  }, []);

  return (
    <div className="winter-bg" style={{ minHeight: '100vh', width: '100vw', position: 'relative', overflow: 'hidden' }}>
      {/* Snowflakes */}
      {snowflakes.map(snow => (
        <span
          key={snow.key}
          className="snowflake"
          style={{
            left: `${snow.left}%`,
            fontSize: `${snow.size}px`,
            opacity: snow.opacity,
            animationDelay: `${snow.delay}s`,
            animationDuration: `${snow.duration}s`,
            top: 0,
          }}
        >
          {snow.char}
        </span>
      ))}
      {/* Back button */}
      <div style={{ position: 'absolute', top: 24, left: 40, zIndex: 10 }}>
        <button
          onClick={() => navigate('/invitation')}
          style={{
            padding: '8px 16px',
            fontSize: '14px',
            fontWeight: 600,
            color: '#f4f6f7',
            background: 'rgba(179, 224, 255, 0.25)',
            border: '1.5px solid #b3e0ff',
            borderRadius: '6px',
            cursor: 'pointer',
            marginRight: '16px',
            boxShadow: 'rgba(179, 224, 255, 0.12) 0px 2px 8px',
            transition: 'background 0.2s, color 0.2s',
          }}
          onMouseOver={e => {
            e.currentTarget.style.background = 'rgba(247, 250, 252, 0.45)';
            e.currentTarget.style.color = '#fff';
          }}
          onMouseOut={e => {
            e.currentTarget.style.background = 'rgba(238, 243, 245, 0.25)';
            e.currentTarget.style.color = '#fcfeff';
          }}
        >
          ← Back
        </button>
      </div>
      {/* Title */}
      <h1 className="winter-title">Winter Gallery</h1>
      {/* Gallery */}
      <div
        style={{
          display: 'flex',
          gap: '32px',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '32px',
          overflow: 'hidden',
          width: '100%',
          maxWidth: '1100px',
          zIndex: 2,
        }}
        onMouseOver={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {images.map((img, idx) => {
          // Use a fixed card width and a larger gap to prevent overlap
          const cardWidth = 340;
          const gap = 48;
          const totalWidth = images.length * (cardWidth + gap);
          let baseX = idx * (cardWidth + gap) - (cardWidth + gap);
          let x = baseX + (offset % totalWidth);
          if (x > cardWidth + gap) x -= totalWidth;
          if (x < -(cardWidth + gap)) x += totalWidth;
          return (
            <div
              key={img.alt}
              className="ice-card"
              style={{
                position: 'relative',
                left: `${x}px`,
                width: `${cardWidth}px`,
                height: '420px',
                zIndex: 1,
                transform: 'none',
                transition: isPaused ? 'box-shadow 0.3s, left 0.3s' : 'box-shadow 0.3s, left 0.3s',
                cursor: 'pointer',
                border: '2.5px solid #b3e0ff',
                marginRight: `${gap}px`,
              }}
              onMouseOver={e => {
                setIsPaused(true);
                e.currentTarget.style.boxShadow = '0 0 64px 0 #b3e0ff99, 0 2px 32px 0 #b3c6ff99';
                e.currentTarget.style.zIndex = 2;
              }}
              onMouseOut={e => {
                setIsPaused(false);
                e.currentTarget.style.boxShadow = '';
                e.currentTarget.style.zIndex = 1;
              }}
              onClick={() => setFullscreenIdx(idx)}
            >
              <img
                src={img.src}
                alt={img.alt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '20px',
                  display: 'block',
                  transition: 'box-shadow 0.3s, transform 0.3s',
                }}
              />
            </div>
          );
        })}
      </div>
      {/* Fullscreen modal */}
      {fullscreenIdx !== null && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(179,224,255,0.98)',
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Close (cross) button */}
          <button
            onClick={() => setFullscreenIdx(null)}
            style={{
              position: 'absolute',
              top: 32,
              right: 40,
              zIndex: 101,
              background: 'rgba(179, 224, 255, 0.25)',
              color: '#2196f3',
              border: '2px solid #b3e0ff',
              borderRadius: '50%',
              width: 48,
              height: 48,
              fontSize: 32,
              fontWeight: 900,
              cursor: 'pointer',
              boxShadow: '0 2px 8px #b3e0ff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.2s, color 0.2s',
            }}
            aria-label="Close fullscreen"
          >
            ×
          </button>
          <img
            src={images[fullscreenIdx].src}
            alt={images[fullscreenIdx].alt}
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              borderRadius: '18px',
              boxShadow: '0 0 64px 0 #b3e0ff99, 0 2px 32px 0 #b3c6ff99',
              border: '3px solid #b3e0ff',
            }}
          />
        </div>
      )}
    </div>
  );
}

export default GalleryPage
