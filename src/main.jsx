import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/index.scss'
import './style/global.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ErrorPage from './routes/error-page.jsx'
import Accueil from './routes/index.jsx'
import A_Propos from './routes/a_propos.jsx'
import Header from './components/header.jsx'
import 'typeface-montserrat'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<Accueil />} />
        <Route path="/a_propos" element={<A_Propos />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
