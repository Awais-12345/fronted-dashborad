import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  MainComponent,
  LoginForm,
  SignupForm,
  Email,
  NewPassword,
  OrderCard,
  UserCard,
  ProductCard,
  Dashboard,
  Analytics
} from "./components";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { ProtectedRoute } from './components/forms/protected';

export const ActiveContext = createContext();

function App() {
  const [user, setUser] = useState(null);
  const [isauthenticated, setAuthenticated] = useState(false);


 useEffect(() => {
  const storedUser = localStorage.getItem('user');
  if (storedUser) {
    setUser(JSON.parse(storedUser));
    setAuthenticated(true);
  } else {
    setAuthenticated(false);
  }
},[]);


  return (
    <ActiveContext.Provider value={{ user, setUser, isauthenticated, setAuthenticated }}>
      <BrowserRouter>
        <ToastContainer position="top-right" autoClose={3000} />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LoginForm />} />
          <Route path="/signupform" element={<SignupForm />} />
          <Route path="/email" element={<Email />} />
          <Route path="/new-password" element={<NewPassword />} />
          {/* Protected Layout Routes */}
          <Route path="/" element={<ProtectedRoute> <MainComponent /> </ProtectedRoute>}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="order" element={<OrderCard />} />
            <Route path="user" element={<UserCard />} />
            <Route path="product" element={<ProductCard />} />
            <Route path="product" element={<ProductCard />} />
            <Route path="analytic" element={<Analytics />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ActiveContext.Provider>
  );
}

export default App;
