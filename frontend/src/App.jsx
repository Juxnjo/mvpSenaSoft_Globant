
import { Routes, Route } from 'react-router-dom'
import { LoginPage } from './pages/LoginPage'

import { HomePage } from './pages/HomePage'

import { RegisterPage } from "./pages/RegisterPage";
import { LibraryPage } from "./pages/LibraryPage";


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/books' element={<LibraryPage/>}/>


      </Routes>

    </>
  )
}

export default App
