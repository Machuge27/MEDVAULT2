import './css/index.css';
import Home from './pages/Home';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Auth from './pages/Auth'
import ProtectedRoute from './Auth/ProtectedRoute'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute/>}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path='/auth' element={<Auth/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;