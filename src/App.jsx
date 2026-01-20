
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import InvitationPage from './pages/InvitationPage'
import GalleryPage from './pages/GalleryPage'

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/invitation" element={<InvitationPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
    </Routes>
  </Router>
)

export default App
