import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import logo from "../assets/logo.png";

function Navbar() {
  const [isLogin, setIsLogin] = useState(false);

  const toggleLogin = () => {
    setIsLogin(!isLogin);
    console.log('udah login ga lu: ', isLogin ? 'logout' : 'login');
  };

  return (
    <div className="flex justify-between items-center w-full h-6 bg-black text-white p-10" >
      <div className="flex items-center m-10">
        <img src={logo} alt="Logo" className="w-12 h-12 mr-4" />
        <h1 className="mr-4"><Link to="/">PEMILU DUMBWAYS.ID</Link></h1>
      </div>
      <div className="flex items-center">
        <ul className="flex">
          <li className="mr-2">
           Partai
          </li>
          <li className="mr-2">I</li>
          <li className="mr-2"><Link  to="/Paslon">Paslon</Link></li>
          <li className="mr-2">I</li>
          <li className="mr-2">Voting</li>
        </ul>
        {isLogin ? (
          <button className="ml-4 bg-white text-black w-8 h-8 rounded-full font-bold" onClick={toggleLogin}>
            D
          </button>
        ) : (
          <button className="ml-4 bg-white text-black w-28 h-8 rounded font-bold" onClick={toggleLogin}>
            <Link to="/Login"> Logout </Link>
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
