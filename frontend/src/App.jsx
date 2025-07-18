import './App.css'
import MainPage from './pages/MainPage'

import { Routes, Route, Navigate } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='*' element={<Navigate to='/'/>} />
      </Routes>
    </>
  )
}

export default App
