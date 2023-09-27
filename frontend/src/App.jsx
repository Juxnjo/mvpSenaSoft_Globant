
import { Routes, Route } from 'react-router-dom'
import { LoginPage } from './pages/LoginPage'

import { HomePage } from './pages/HomePage'
import { TicketsPage } from './pages/TicketsPage'

import { RegisterPage } from "./pages/RegisterPage";


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LoginPage />} />

        <Route path='/home' element={<HomePage />} />

        <Route path='/ticket' element={<TicketsPage />} />

        <Route path='/register' element={<RegisterPage />} />


      </Routes>

    </>
  )
}

export default App
