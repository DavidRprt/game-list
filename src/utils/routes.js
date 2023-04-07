import React from "react";
import { Route, Routes } from "react-router-dom";
import Discover from "../components/Find";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import MyGames from "../components/MyGames";
import HomeScreen from "../components/HomeScreen";
import Info from "../components/Info";

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<SignUpForm />} />
      <Route path="/radar" element={<MyGames completed={false} />} />
      <Route path="/discover" element={<Discover />} />
      <Route path="/completed" element={<MyGames completed={true} />} />
      <Route path="/games/:slug" element={<Info />} />
    </Routes>
  )
};

export default RoutesConfig;
