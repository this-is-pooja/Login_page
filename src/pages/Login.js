import { BiHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";
import React, { useState } from "react";
import '../App.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const styleIcon = { color: "#36454f", fontSize: "1.1rem" };
  const [query, setQuery] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(prevState => !prevState);
  };
  const Login = (e) => {
    e.preventDefault();
    const data = {
      "uid": `${query}`,
      "password": `${password}`
    };
    axios.post('https://myphysio.digitaldarwin.in/api/login/', data)
      .then(res => {
        localStorage.setItem('token', JSON.stringify(res.data));
      })
      .then(()=>{navigate('/Home')})
      .catch(err => {
        console.log(err);
      })
  }
  return (
    <div className="App">
      <h1 className='phy-head'>PHYSIOAI</h1>
      <h2>Welcome Back!</h2>
      <form onSubmit={Login}>
        <label className='label'>
          <span class="required">*</span>Username
        </label>
        <input
          type="text"
          className="input"
          placeholder=''
          value={query}
          onChange={e => setQuery(e.target.value)} />

        <label className='label'>
          <span class="required">*</span>Password
        </label>
        <div className="password-control">
          <input
            className="password-filled"
            type={passwordShown ? "text" : "password"}
            placeholder=''
            value={password}
            onChange={e => setPassword(e.target.value)} />
          <button className="btn" onClick={togglePassword}>
            {
              passwordShown ? <BiHide style={styleIcon} /> : <BiShow style={styleIcon} />
            }
          </button>
        </div>
      </form>
      <h3>Forgot Password?</h3>
      <button className="log-btn" onClick={Login}>Login</button>
    </div>
  );
}

export default Login;

