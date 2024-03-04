import { Link } from "react-router-dom";

function Register() {
    return (
      <>
        <section className="flex justify-center items-center w-auto  mt-10 ">
          <div className="w-4/12 h-full bg-white p-12 rounded-lg ">
            <h1 className="text-center text-2xl mt-0 font-bold text-yellow-800">Register</h1>
  
            <label htmlFor="fullname" className="text-base font-semibold text-gray-600">Fullname</label>
            <input type="text" name="fullname" id="fullname"  
            className=" h-8 ring-1 ring-black w-full mt-2 ring-offset-slate-50  rounded" />
  
            <label htmlFor="address"  className="text-base font-semibold text-gray-600">Alamat</label>
            <input type="text" name="address" id="address" 
            className="h-8 ring-1 ring-black w-full mt-2 ring-offset-slate-50  rounded" />

<label htmlFor="gender"  className="text-base font-semibold text-gray-600">Jenis Kelamin</label>
            <input type="text" name="gender" id="gender" 
            className="h-8 ring-1 ring-black w-full mt-2 ring-offset-slate-50  rounded" />

<label htmlFor="username"  className="text-base font-semibold text-gray-600">Username</label>
            <input type="text" name="username" id="username" 
            className="h-8 ring-1 ring-black w-full mt-2 ring-offset-slate-50  rounded" />

<label htmlFor="password"  className="text-base font-semibold text-gray-600">Password</label>
            <input type="password" name="passWord" id="password" 
            className="h-8 ring-1 ring-black w-full mt-2 ring-offset-slate-50  rounded" />


            <button className="w-full bg-yellow-600 mt-6 h-10 rounded-xl font-bold text-xl text-white ">SUBMIT</button>
            <p className="text-center mt-4">Sudah Memiliki Akun ?  <Link to="/Register" className="text-blue-900">Login</Link></p>
          </div>
        </section>
      </>
    )
  }
  
  export default Register;
  