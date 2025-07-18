import './App.css'

import MainPage from './pages/MainPage'
// import GamePage from './pages/GamePage'

import { Routes, Route, Navigate } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} />
        {/* <Route path='/game' element={<GamePage />} /> */}
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </>
  )
}

export default App
