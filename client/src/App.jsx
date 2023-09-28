
import { Routes, Route } from 'react-router-dom'
import { WelcomePage } from "./pages/WelcomePage";
import { LoginPage } from './pages/LoginPage'

import { HomePage } from './pages/HomePage'
import { TicketsPage } from './pages/TicketsPage'

import { RegisterPage } from "./pages/RegisterPage";
import { LibraryPage } from "./pages/LibraryPage";
import { DashboardPage } from "./pages/DashboardPage";

import FollowUpComponent from './components/FollowUpForm/FollowUpComponent';
import FeedbackFormComponent from './components/FeedbackForm/FeedbackFormComponent';
import Feedbacks from './pages/Feedbacks';
import FeedbacksList from './pages/FeedbacksList';
import CommunityPage from './pages/CommunityPage';
import FormFollowUp from './pages/FormFollowUp';



function App ()
{

  return (
    <>

    {/* especifico las rutas y vistas de mi aplicacion */}

      <Routes>

        <Route path='/' element={ <WelcomePage /> } />
        <Route path='/login' element={ <LoginPage /> } />
        <Route path='/home' element={ <HomePage /> } />
        <Route path='/register' element={ <RegisterPage /> } />
        <Route path='/books' element={ <LibraryPage /> } />
        <Route path='/dashboard' element={ <DashboardPage /> } />
        <Route path="/followup/:id" element={<FollowUpComponent />} />
        <Route path="/feedbacks" element={<Feedbacks />} />
        <Route path="/feedback/:id" element={<FeedbackFormComponent />} />
        <Route path="/feedbacklist" element={<FeedbacksList />} />


        <Route path='/ticket' element={<TicketsPage />} />
        <Route path='/foro' element={<CommunityPage />} />
        <Route path='/follow' element={<FormFollowUp />} />
    
      </Routes>

    </>
  )
}

export default App
