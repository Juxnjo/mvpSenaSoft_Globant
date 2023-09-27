
import { Routes, Route } from 'react-router-dom'
import { LoginPage } from './pages/LoginPage'
import { HomePage } from './pages/HomePage'
import { TicketsPage } from './pages/TicketsPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/ticket' element={<TicketsPage />} />
      </Routes>

    </>
  )
}

export default App
