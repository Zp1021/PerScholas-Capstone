import './App.css'
import MainPage from './components/MainPage'

import { Routes, Route, Navigate } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} />       
      </Routes>
    </>
  )
}

export default App
