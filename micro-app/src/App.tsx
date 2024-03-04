import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import DetailPage from './pages/users/DetailPage';
import Home from './pages/users/Home';
import Paslon from './pages/users/Paslon';
import DashBord from './pages/Admin/DashBord';
import Login from './pages/users/login';
import Register from './pages/users/Register';
import ModalVote from './pages/users/ModalVote';
import ListPartai from './pages/Admin/ListPartai';
import ListPaslon from './pages/Admin/ListPaslon';
import AddPaslon from './pages/Admin/AddPaslon';
import AddPartai from './pages/Admin/AddPartai';
import { Auth } from './interface/Auth';
import { Link } from 'react-router-dom';

const App: React.FC = () => {
  const [isLoginAdmin, setIsLoginAdmin] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [form, setForm] = useState<Auth>({
    username: '',
    password: '',
  });

  function handleSetForm(event: React.ChangeEvent<HTMLInputElement>): void {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (form.username === 'admin' && form.password === 'admin') {
      setIsLoginAdmin(true);
    } else {
      setIsLogin(true);
    }
  }

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={isLogin ? <Home /> : <Navigate to="/login" />} />
          <Route path="/DetailPage" element={isLogin ? <DetailPage /> : <Navigate to="/login" />} />
          <Route path="/Paslon" element={isLogin ? <Paslon /> : <Navigate to="/login" />} />
          {isLoginAdmin && (
            <>
              <Route path="/DashBord" element={<DashBord />} />
              <Route path="/ListPartai" element={<ListPartai />} />
              <Route path="/ListPaslon" element={<ListPaslon />} />
              <Route path="/AddPaslon" element={<AddPaslon />} />
              <Route path="/AddPartai" element={<AddPartai />} />
            </>
          )}
          <Route
            path="/Login"
            element={<Login form={form} handleSetForm={handleSetForm} login={login} />}
          />
          <Route path="/Register" element={<Register />} />
          <Route path="/Modalvote" element={<ModalVote />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
