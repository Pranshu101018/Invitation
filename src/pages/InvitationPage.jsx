import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import confetti from 'canvas-confetti'
import '../styles/InvitationPage.css'

const InvitationPage = () => {
  const navigate = useNavigate()
  const inviteData = {
    eventTitle: 'Official Graduation Invitation',
    batchName: 'MSU Batch 6',
    mainMessage:
      'You are cordially invited to celebrate the achievements and milestones of MSU Batch 6. Join us for an evening of reflection, recognition, and joy.',

    guests: [
      'Amaresh Kalavara',
      'Harish K1',
      'Aparna KS',
    ],

    gratitudeTitle: 'A Message of Gratitude',
    gratitudeSubtitle: 'From Learners to Future Leaders',
    gratitudeMessage:
      'As we move forward into the next phase of our professional journey, we take a moment to sincerely acknowledge and thank everyone who has played a vital role in shaping our path. This occasion marks not a conclusion, but the beginning of a new and promising chapter. The knowledge, guidance, and experiences gained during our MSU training will continue to serve as a strong foundation as we transition into graduation and take on greater responsibilities within Mu Sigma.',

    graduates: [
      { name: 'Aelli Gupta', id: '17541' },
      { name: 'Momethika', id: '17577' },
      { name: 'Gatti Satya Chaitanya', id: '17578' },
      { name: 'Omkar', id: '17582' },
      { name: 'Shubham Shukla', id: '17583' },
      { name: 'Ananya Bhaganagarapu', id: '17587' },
      { name: 'Hanuman Setty Sampath Kumar', id: '17585' },
      { name: 'Gonuguntla Chinna Saidula Sri Navya', id: '17586' },
      { name: 'Vinnakota Rama Mohan Rishik', id: '17588' },
      { name: 'Anushka Das', id: '17589' },
      { name: 'Sumona Banick', id: '17590' },
      { name: 'Vishwajit Ramdas Bhongale', id: '17591' },
      { name: 'R Nithish', id: '17595' },
      { name: 'Rahul Shettigar', id: '17596' },
      { name: 'Asthik B Gowda', id: '17597' },
      { name: 'Sharath M D', id: '17598' },
      { name: 'Mohammed Ibrahim Nihal', id: '17599' },
      { name: 'Madhumita', id: '17603' },
      { name: 'Nikhil Rai', id: '17608' },
      { name: 'Megha B S', id: '17613' },
      { name: 'Rion Sutradhar', id: '17615' },
      { name: 'Indhuja GB', id: '17616' },
      { name: 'Hardik Chauhan', id: '17617' },
      { name: 'Kundena Shweta', id: '17619' },
      { name: 'Syed Fakruddin', id: '17620' },
      { name: 'Yuvraj', id: '17623' },
      { name: 'Rahul Dey', id: '17626' },
      { name: 'Shama Shetty', id: '17630' },
      { name: 'Chennupati Pavan Sanjay', id: '17631' },
      { name: 'Keshav Kumar Bharti', id: '17633' },
      { name: 'Pranshu Mishra', id: '17634' },
      { name: 'Shriram C', id: '17636' },
      { name: 'Amresh Kumar', id: '17638' },
      { name: 'Aditya Amitabh', id: '17639' },
      { name: 'V Sredesh', id: '17641' },
      { name: 'Aman Verma', id: '17642' },
      { name: 'Tanish Dogra', id: '17643' },
      { name: 'M.M. Sandhya', id: '17645' },
      { name: 'A Charishma Reddy', id: '17646' },
      { name: 'Adapa Bala Subrahmanya Sai Kowshik', id: '17647' },
      { name: 'Ashish Kumar', id: '17649' },
      { name: 'Riduvarshini M', id: '17650' },
      { name: 'Yarramreddy Hemanth Reddy', id: '17654' },
      { name: 'Karimbai Chenchu Harshitha', id: '17655' },
      { name: 'Padma Priya', id: '17656' },
      { name: 'Sanskar Kashyap', id: '17658' },
      { name: 'Malepu Shrishanth', id: '17660' },
      { name: 'Jonna Mohit', id: '17661' },
      { name: 'Kiran Prusty', id: '17662' },
      { name: 'Mohammad Juned', id: '17663' },
      { name: 'Aparoop Bennur', id: '17666' },
      { name: 'Vanshika Garg', id: '17667' },
      { name: 'Vattem Sai Harshitha', id: '17668' },
      { name: 'Kadambala Gautam', id: '17670' },
      { name: 'Shraddha Mahadev Muragi', id: '17671' },
      { name: 'Intipalli Satya Sriram', id: '17672' },
      { name: 'S P Brahma Chaitanya', id: '17673' },
      { name: 'Alapati Naga Priya Mani Chandana', id: '17677' },
      { name: 'T Praneeth', id: '17680' },
      { name: 'Priyanshu Kumar Chaudhary', id: '17682' },
      { name: 'Manda Revanth Venkata Siva Kumar', id: '17684' },
      { name: 'Panchumarthi Thrisha Choudary', id: '17685' },
      { name: 'Kola Thapan Satya Madhav', id: '17687' },
    ],
  }

  useEffect(() => {
    const colors = ['#ffd700', '#660099', '#00d4ff', '#ffffff']
    const origins = [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: 1 },
    ]

    origins.forEach((origin, index) => {
      setTimeout(() => {
        confetti({
          particleCount: 100,
          startVelocity: 30,
          spread: 360,
          origin,
          colors,
          ticks: 60,
          gravity: 1,
          decay: 0.95,
        })
      }, index * 200)
    })
  }, [])


  return (
    <div className="invitation-page">
      <header className="invitation-header" style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '20px 40px', background: 'rgba(135, 206, 235, 0.15)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(135, 206, 235, 0.3)' }}>
        <button
          className="back-button"
          onClick={() => navigate('/home')}
          style={{
            padding: '8px 16px',
            fontSize: '14px',
            fontWeight: 600,
            color: '#87ceeb',
            background: 'rgba(135, 206, 235, 0.25)',
            border: '1px solid rgba(135, 206, 235, 0.6)',
            borderRadius: '6px',
            cursor: 'pointer',
            marginRight: '16px',
            boxShadow: '0 2px 8px rgba(135,206,235,0.12)',
            transition: 'background 0.2s, color 0.2s',
          }}
          onMouseOver={e => {
            e.currentTarget.style.background = 'rgba(135, 206, 235, 0.45)';
            e.currentTarget.style.color = '#fff';
          }}
          onMouseOut={e => {
            e.currentTarget.style.background = 'rgba(135, 206, 235, 0.25)';
            e.currentTarget.style.color = '#87ceeb';
          }}
        >
          ← Back
        </button>
        <h1 style={{ flex: 1, fontSize: '28px', fontWeight: 700, letterSpacing: '2px', color: '#87ceeb', margin: 0 }}>
          {inviteData.eventTitle}
        </h1>
        <button
          onClick={() => navigate('/gallery')}
          style={{
            padding: '8px 16px',
            fontSize: '14px',
            fontWeight: 600,
            color: '#87ceeb',
            background: 'rgba(135, 206, 235, 0.25)',
            border: '1px solid rgba(135, 206, 235, 0.6)',
            borderRadius: '6px',
            cursor: 'pointer',
            marginLeft: '16px',
            boxShadow: '0 2px 8px rgba(135,206,235,0.12)',
            transition: 'background 0.2s, color 0.2s',
          }}
          onMouseOver={e => {
            e.currentTarget.style.background = 'rgba(135, 206, 235, 0.45)';
            e.currentTarget.style.color = '#fff';
          }}
          onMouseOut={e => {
            e.currentTarget.style.background = 'rgba(135, 206, 235, 0.25)';
            e.currentTarget.style.color = '#87ceeb';
          }}
        >
          View Photo Gallery
        </button>
      </header>

      <div className="invitation-content">
        <section className="hero-message">
          <h2>{inviteData.batchName}</h2>
          <p>{inviteData.mainMessage}</p>
        </section>

        <div className="three-cards-container">
          {/* Card 1 */}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Distinguished Guests <span role="img" aria-label="namaste" style={{marginLeft: '6px', verticalAlign: 'middle'}}>🙏</span></h3>
              <p className="card-subtitle">
                We are privileged to host our Guests.
              </p>
            </div>
            <div className="card-body scrollable">
              <ul className="guests-list">
                {inviteData.guests.map((guest, index) => (
                  <li key={index}>{guest}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">{inviteData.gratitudeTitle} <span role="img" aria-label="scroll" style={{marginLeft: '6px', verticalAlign: 'middle'}}>📜</span></h3>
              <p className="card-subtitle">{inviteData.gratitudeSubtitle}</p>
            </div>
            <div className="card-body">
              <p className="gratitude-message">
                {inviteData.gratitudeMessage}
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Graduating Cohort <span role="img" aria-label="graduation cap" style={{marginLeft: '6px', verticalAlign: 'middle'}}>🎓</span></h3>
              <p className="card-subtitle">{inviteData.batchName} Members</p>
            </div>
            <div className="card-body scrollable">
              <div className="graduates-grid">
                {inviteData.graduates.map((graduate, index) => (
                  <div key={index} className="graduate-item">
                    <p className="graduate-name">{graduate.name}</p>
                    <p className="graduate-id">{graduate.id}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InvitationPage
