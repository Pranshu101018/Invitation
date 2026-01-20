import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/HomePage.css'

const HomePage = () => {
  const navigate = useNavigate()
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const inviteData = {
    year: '2026',
    eventTitle: 'GRADUATION CEREMONY',
    batchName: 'MSU Batch 6',
    mainText: 'You Are Cordially Invited',
    subText: 'to celebrate the achievements of',
    date: '21st January 2026',
    time: '12:00-2:00 PM',
    venue: 'Mu Sigma L14 Board Normal',
    address: 'Aviator Building, ITPL SEZ, Bangalore',
    targetDate: '2026-01-21T12:00:00',
    guests: [
      'Dr. Rajesh Kumar - Chief Mentor',
      'Prof. Ananya Sharma - Academic Director',
      'Ms. Priya Singh - Industry Partner',
      'Mr. Vikram Patel - Dean of Studies',
    ],
    gratitudeMessage: 'We are deeply grateful for the guidance, support, and encouragement provided by our mentors, faculty, and families throughout this incredible journey.',
    graduates: [
      { name: 'Aarav Gupta', batch: 'MSU-001' },
      { name: 'Bhavana Reddy', batch: 'MSU-002' },
      { name: 'Charan Sharma', batch: 'MSU-003' },
      { name: 'Divya Nair', batch: 'MSU-004' },
      { name: 'Esha Patel', batch: 'MSU-005' },
      { name: 'Farhan Ahmed', batch: 'MSU-006' },
    ],
  }

  // Snowfall Canvas Ref
  const snowCanvasRef = useRef(null)

  useEffect(() => {
    // Calculate countdown immediately on mount
    const calculateCountdown = () => {
      const now = new Date().getTime()
      const target = new Date(inviteData.targetDate).getTime()
      const diff = target - now

      if (diff > 0) {
        setCountdown({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        })
      }
    }

    // Run immediately first
    calculateCountdown()

    // Then set interval for updates
    const timer = setInterval(calculateCountdown, 1000)

    return () => clearInterval(timer)
  }, [inviteData.targetDate])

  // Snowfall effect
  useEffect(() => {
    const canvas = snowCanvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let width = window.innerWidth
    let height = window.innerHeight
    let animationId

    // Snowflake properties
    const SNOWFLAKE_COUNT = Math.floor(width / 18)
    const snowflakes = Array.from({ length: SNOWFLAKE_COUNT }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: 2.5 + Math.random() * 4.5, // 2.5px to 7px
      o: 0.55 + Math.random() * 0.35, // opacity 0.55-0.9
      speed: 0.7 + Math.random() * 0.7, // 0.7-1.4 px/frame
      drift: (Math.random() - 0.5) * 0.5, // -0.25 to 0.25 px/frame
    }))

    function resize() {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }
    resize()
    window.addEventListener('resize', resize)

    function draw() {
      ctx.clearRect(0, 0, width, height)
      for (let flake of snowflakes) {
        ctx.save()
        ctx.globalAlpha = flake.o
        const gradient = ctx.createRadialGradient(flake.x, flake.y, 0, flake.x, flake.y, flake.r)
        gradient.addColorStop(0, 'rgba(255,255,255,1)')
        gradient.addColorStop(1, 'rgba(255,255,255,0)')
        ctx.beginPath()
        ctx.arc(flake.x, flake.y, flake.r, 0, 2 * Math.PI)
        ctx.fillStyle = gradient
        ctx.shadowColor = '#fff'
        ctx.shadowBlur = 8
        ctx.fill()
        ctx.restore()
        // Move flake
        flake.y += flake.speed
        flake.x += flake.drift
        // Respawn at top if out of view
        if (flake.y > height + flake.r) {
          flake.x = Math.random() * width
          flake.y = -flake.r
          flake.r = 2.5 + Math.random() * 4.5
          flake.o = 0.55 + Math.random() * 0.35
          flake.speed = 0.7 + Math.random() * 0.7
          flake.drift = (Math.random() - 0.5) * 0.5
        }
        // Wrap horizontally
        if (flake.x < -flake.r) flake.x = width + flake.r
        if (flake.x > width + flake.r) flake.x = -flake.r
      }
      animationId = requestAnimationFrame(draw)
    }
    draw()
    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  const handleConfetti = () => {
    navigate('/invitation')
  }

  return (
    <div className="home-container" style={{ position: 'relative', zIndex: 0 }}>
      {/* Snowfall Canvas Overlay */}
      <canvas
        ref={snowCanvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: 2,
        }}
        width={typeof window !== 'undefined' ? window.innerWidth : 1920}
        height={typeof window !== 'undefined' ? window.innerHeight : 1080}
        aria-hidden="true"
      />
      {/* Header Section - Top */}
      <section className="header-section">
        <p className="header-subtitle">The {inviteData.year} {inviteData.eventTitle}</p>
        <h1 className="header-title">{inviteData.mainText}</h1>
        <p className="header-caption" style={{ color: '#fff', fontWeight: 700 }}>
          to celebrate the achievements of MSU Batch 6
        </p>
      </section>

      {/* Event Details Section - Center */}
      <section className="event-details-section">
        <div className="details-cards-container">
          <div className="details-card">
            <p className="details-date">{inviteData.date} • {inviteData.time}</p>
          </div>
          <div className="details-card">
            <p className="details-venue">{inviteData.venue} — {inviteData.address}</p>
          </div>
        </div>

        {/* CTA Button */}
        <button className="cta-button" onClick={handleConfetti}>
          View Official Invitation
        </button>
      </section>

      {/* Countdown Timer - Bottom */}
      <section className="countdown-section">
        <div className="countdown-timer">
          <div className="countdown-item">
            <span className="countdown-value">{String(countdown.days).padStart(2, '0')}</span>
            <span className="countdown-label">DAYS</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-value">{String(countdown.hours).padStart(2, '0')}</span>
            <span className="countdown-label">HOURS</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-value">{String(countdown.minutes).padStart(2, '0')}</span>
            <span className="countdown-label">MINUTES</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-value">{String(countdown.seconds).padStart(2, '0')}</span>
            <span className="countdown-label">SECONDS</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
