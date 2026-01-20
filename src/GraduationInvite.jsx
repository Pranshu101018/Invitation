import './GraduationInvite.css'
import { useState, useEffect } from 'react'

const GraduationInvite = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  // Customize these details
  const inviteData = {
    year: '2026',
    eventTitle: 'GRADUATION CEREMONY',
    batchName: 'MSU Batch 6',
    mainText: 'You Are Cordially Invited',
    subText: 'to celebrate the achievements of',
    date: '21st January 2026',
    time: '11:00 AM',
    venue: 'Mu Sigma L14 Board Normal',
    address: 'Aviator Building, ITPL SEZ, Bangalore',
    targetDate: '2026-01-21T12:00:00',
  }

  useEffect(() => {
    const timer = setInterval(() => {
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
    }, 1000)

    return () => clearInterval(timer)
  }, [inviteData.targetDate])

  return (
    <div className="invite-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h3 className="event-year">THE {inviteData.year} {inviteData.eventTitle}</h3>
          
          <h1 className="main-title">{inviteData.mainText}</h1>
          
          <p className="sub-text">
            {inviteData.subText}
            <span className="batch-highlight">{inviteData.batchName}</span>
          </p>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="details-section">
        <div className="details-content">
          <div className="datetime-box">
            <p className="datetime-label">DATE & TIME</p>
            <p className="datetime-value">{inviteData.date} • {inviteData.time}</p>
          </div>

          <div className="venue-box">
            <p className="venue-label">VENUE</p>
            <p className="venue-name">{inviteData.venue}</p>
            <p className="venue-address">— {inviteData.address}</p>
          </div>

          <button className="cta-button">View Official Invitation</button>
        </div>
      </section>

      {/* Countdown Timer */}
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

export default GraduationInvite
