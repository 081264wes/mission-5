import React, { useState } from "react";
import "./LoginRegister.css";
import googleicon from '../assets/logos_google-icon.png'
import iconvideobelajar from '../assets/Logo.png'


const LoginRegister = () => {
  const [action, setAction] = useState("");

  const registerLink = () => {
    setAction(" active");
  };

  const loginLink = () => {
    setAction("");
  };

  return (
  <div>
      <nav class="navbar">
            <img src={iconvideobelajar} class="logo"></img>
            <div className="menu-toggle" id="menu-toggle">&#9776;</div>
        </nav>

    <div className={`wrapper${action}`}>
      <div className="form-box login">
        <form action="">
          <h1>Masuk ke akun</h1>
          <p className="p1">Yuk, lanjutin belajarmu di videobelajar.</p>
          <div className="input-box">
            <p>E-mail</p>
            <input type="text" placeholder="" required />
          </div>
          <div className="input-box">
            <p>Kata Sandi</p>
            <input type="password" placeholder="" required />
          </div>
          <div className="remember-password">
            <label>
              <input type="checkbox"></input>Remember me?
            </label>
            <a href="#">Lupa Password ?</a>
          </div>
          <button type="submit">Masuk</button>
          <button className="register-link">
            <a href="#" onClick={registerLink}>
              Daftar
            </a>
          </button>
          <div class="divider">
            <span>atau</span>
          </div>
          <button type="submit" className="btn-google">
            <img src={googleicon} alt="Google Icon" /> Login with Google
          </button>
        </form>
      </div>

      <div className="form-box register">
        <form action="">
          <h1>Pendaftaran Akun</h1>
          <p className="p1">Yuk, daftarkan akunmu sekarang juga!</p>
          <div className="input-box">
            <p>Nama Lengkap</p>
            <input type="text" placeholder="" required />
          </div>
          <div className="input-box">
            <p>E-mail</p>
            <input type="password" placeholder="" required />
          </div>
          <div className="input-box">
            <p>Kata Sandi</p>
            <input type="password" placeholder="" required />
          </div>
          <div className="input-box">
            <p>Konfirmasi kata sandi</p>
            <input type="password" placeholder="" required />
          </div>
          <div className="remember-password">
            <label>
              <input type="checkbox"></input>Remember me?
            </label>
            <a href="#">Lupa Password ?</a>
          </div>
          <button type="submit">Daftar</button>
          <button className="register-link">
            <a href="#" onClick={loginLink}>
              Masuk
            </a>
          </button>
          <div class="divider">
            <span>atau</span>
          </div>
          <button type="submit" className="btn-google">
            <img src={googleicon} alt="Google Icon" /> Login with Google
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default LoginRegister;


