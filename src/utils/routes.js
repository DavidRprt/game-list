import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Discover from '../components/Discover'
import LoginForm from '../components/LoginForm'
import SignUpForm from '../components/SignUpForm'
import Completed from '../components/Completed'

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<SignUpForm />} />
      <Route path="/radar" element={<h4>Radar</h4>} />
      <Route path="/discover" element={<Discover />} />
      <Route path="/completed" element={<Completed />} />
    </Routes>
  )
}

export default RoutesConfig