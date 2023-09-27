
import { Routes, Route } from 'react-router-dom'
import { LoginPage } from './pages/LoginPage'

import { HomePage } from './pages/HomePage'
import { TicketsPage } from './pages/TicketsPage'

import { RegisterPage } from "./pages/RegisterPage";
import { CommunityPage } from './pages/CommunityPage';


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LoginPage />} />

        <Route path='/home' element={<HomePage />} />

        <Route path='/ticket' element={<TicketsPage />} />

        <Route path='/register' element={<RegisterPage />} />
        <Route path='/comunnity' element={<CommunityPage />} />

      </Routes>

    </>
  )
}

export default App
