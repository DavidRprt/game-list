import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Discover from '../components/Discover'
import LoginForm from '../components/LoginForm'
import SignUpForm from '../components/SignUpForm'
import MyGames from '../components/MyGames'

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<SignUpForm />} />
      <Route path="/radar" element={<MyGames completed={false}/>} />
      <Route path="/discover" element={<Discover />} />
      <Route path="/completed" element={<MyGames completed={true}/>} />
    </Routes>
  )
}

export default RoutesConfig