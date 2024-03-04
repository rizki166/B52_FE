import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {Auth} from '../../interface/Auth';

type PropsType = {
  form: Auth;
  handleSetForm: (event: React.ChangeEvent<HTMLInputElement>) => void;
  login: (e: React.FormEvent<HTMLFormElement>) => void;
  errorMessage?: string; 
};

const Login: React.FC<PropsType> = ({ form, handleSetForm, login, errorMessage }) => {
  const navigate = useNavigate();

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); 
    login(e);
    
    if (form.username === 'admin' && form.password === 'admin') {
      navigate('/DashBord');
    } else {
      navigate('/');
    }
  }

  return (
    <>
      <section className="flex justify-center items-center w-auto mt-28">
        <div className="w-4/12 h-96 bg-white p-12 rounded-lg">
          <h1 className="text-center text-2xl mt-0 font-bold text-yellow-800">LOGIN</h1>

          <form onSubmit={handleLogin}>
            <label htmlFor="Username" className="text-xl font-semibold text-gray-600">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="Username"
              value={form.username}
              onChange={handleSetForm}
              className="h-8 ring-1 ring-black w-full mt-2 ring-offset-slate-50 rounded"
            />

            <label htmlFor="password" className="text-xl font-semibold text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={form.password}
              onChange={handleSetForm}
              className="h-8 ring-1 ring-black w-full mt-2 ring-offset-slate-50 rounded"
            />

            
            {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}

            <button type="submit" className="w-full bg-yellow-600 mt-6 h-10 rounded-xl font-bold text-xl text-white">
              SUBMIT
            </button>
          </form>

          <p className="text-center mt-4">
            Belum memiliki akun ? <Link to="/register" className="text-blue-900">Register</Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default Login;
