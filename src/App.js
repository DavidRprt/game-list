import LoginForm from "./components/LoginForm"
import SignUpForm from "./components/SignUpForm"
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  
  return (
    <div className="App">
      <Router>
      <Navbar/> 

      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm/>} />
        <Route path="/wishlist" element={<h4>Wishlist</h4>} />
        <Route path="/latest" element={<h4>Latest games</h4>} />
        <Route path="/games" element={<h4>My games</h4>} />
       
      </Routes>

    </Router>
    </div>
  )
}

export default App
