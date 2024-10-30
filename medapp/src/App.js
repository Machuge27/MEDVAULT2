import './css/index.css';
import Home from './pages/Home';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Auth from './pages/Auth'
import ProtectedRoute from './Auth/ProtectedRoute'
import Base from './pages/Base';
import './index.css'
import History from './pages/History';
import AppointmentForm from './pages/Appointment'; 
import PatientResults from './pages/PatientResult';
import HealthAnalysis from './pages/HealthAnalysis'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute/>}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route path='/auth' element={<Auth/>} />
        {/* <Route path='/home' element={<Base/>} /> */}
        <Route path='/Appointment' element={<AppointmentForm/>} />
        <Route path='/History' element={<History/>} />
        <Route path='/results' element={<PatientResults/>} />
        <Route path='/analysis' element={<HealthAnalysis/>} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App;