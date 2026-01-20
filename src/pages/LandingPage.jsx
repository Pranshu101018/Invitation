
import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/HomePage.css'
import landingImg from '../assets/Image (2).jpg'

const LandingPage = () => {
  const navigate = useNavigate()

  return (
    <div
      className="landing-page"
      style={{
        minHeight: '100vh',
        width: '100vw',
        background: 'linear-gradient(135deg, #660099 0%, #ffd700 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <img
        src={landingImg}
        alt="Landing"
        style={{
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1,
          filter: 'brightness(0.92) saturate(1.1)',
        }}
      />
      <button
        className="landing-navigate-btn"
        style={{
          position: 'absolute',
          left: '50%',
          bottom: '48px',
          transform: 'translateX(-50%)',
          padding: '16px 40px',
          fontSize: '1.2rem',
          borderRadius: '28px',
          background: 'rgba(102,0,153,0.92)',
          color: '#ffd700',
          border: '2px solid #ffd700',
          fontWeight: 700,
          letterSpacing: '1px',
          cursor: 'pointer',
          boxShadow: '0 4px 16px rgba(0,0,0,0.18)',
          zIndex: 2,
          transition: 'background 0.2s, color 0.2s',
        }}
        onClick={() => navigate('/home')}
        onMouseOver={e => {
          e.currentTarget.style.background = '#ffd700';
          e.currentTarget.style.color = '#660099';
        }}
        onMouseOut={e => {
          e.currentTarget.style.background = 'rgba(102,0,153,0.92)';
          e.currentTarget.style.color = '#ffd700';
        }}
      >
        Enter
      </button>
    </div>
  )
}

export default LandingPage
