import './App.css'

import MainPage from './pages/MainPage'
import GamePage from './pages/GamePage'
import ScorePage from './pages/ScorePage'
import AboutPage from './pages/AboutPage'

import { Routes, Route, Navigate } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/game' element={<GamePage />} />
        <Route path='/scores' element={<ScorePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>
    </>
  )
}

export default App
