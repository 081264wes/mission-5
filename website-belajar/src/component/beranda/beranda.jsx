import React from "react";
import "./beranda.css";
import iconvideobelajar from "../assets/Logo.png";
import avatar from "../assets/Avatar.png";
import cardimage1 from "../assets/card-image1.png";
import cardimage2 from "../assets/card-image2.png";
import cardimage3 from "../assets/card-image3.png";
import cardimage4 from "../assets/card-image4.png";
import cardimage5 from "../assets/card-image5.png";
import cardimage6 from "../assets/card-image6.png";
import cardimage7 from "../assets/card-image7.png";
import cardimage8 from "../assets/card-image8.png";
import cardimage9 from "../assets/card-image9.png";
import profileAvatar from "../assets/profile/Avatar.png";
import Rating from "../button feature/star_rating.jsx";
import iconTwitter from "../assets/icon/icon twitter.png";
import iconFacebook from "../assets/icon/icon facebook.png";
import iconLinkedn from "../assets/icon/icon linkedn.png";
import iconInstagram from "../assets/icon/icon instagram.png";

const Beranda = () => {
  return (
    <div>
      <nav className="navbar">
        <img src={iconvideobelajar} className="logo" alt="Logo" />
        <ul className="nav-links">
          <li>
            <a href="#">kategori</a>
          </li>
          <li>
            <a href="#">
              <img src={avatar} alt="User Avatar" />
            </a>
          </li>
        </ul>
      </nav>
      <div className="wrapper">
        <ul>
          <li>
            <h1>Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!</h1>
          </li>
          <li>
            <p>Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda.</p>
          </li>
          <li>
            <button type="">Temukan Video Course untuk Dipelajari!</button>
          </li>
        </ul>
      </div>
      <h2>Koleksi Video Pembelajaran Unggulan</h2>
      <small>Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</small>
      <div className="navlink">
        <a href="#">Semua kelas</a>
        <a href="#">Pemasaran</a>
        <a href="#">Desain</a>
        <a href="#">Pengembangan Diri</a>
        <a href="#">Bisnis</a>
      </div>
      <div className="card-container">
        <div className="card-border">
          <div className="card">
            <img src={cardimage1} alt="Image 1" />
            <div className="card-content">
              <h2>Big 4 Auditor Financial Analyst</h2>
              <p>Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik</p>
              <div className="profile-info">
                <img src={profileAvatar} alt="Profile Avatar" />
                <span>Jenna Ortega</span>
                <small>
                  Senior Accountant di <b>Gojek</b>
                </small>
              </div>
              <Rating />
            </div>
          </div>
        </div>
        <div className="card-border">
          <div className="card">
            <img src={cardimage2} alt="Image 2" />
            <div className="card-content">
              <h2>Big 4 Auditor Financial Analyst</h2>
              <p>Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik</p>
              <div className="profile-info">
                <img src={profileAvatar} alt="Profile Avatar" />
                <span>Jenna Ortega</span>
                <small>
                  Senior Accountant di <b>Gojek</b>
                </small>
              </div>
              <Rating />
            </div>
          </div>
        </div>
        <div className="card-border">
          <div className="card">
            <img src={cardimage3} alt="Image 3" />
            <div className="card-content">
              <h2>Big 4 Auditor Financial Analyst</h2>
              <p>Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik</p>
              <div className="profile-info">
                <img src={profileAvatar} alt="Profile Avatar" />
                <span>Jenna Ortega</span>
                <small>
                  Senior Accountant di <b>Gojek</b>
                </small>
              </div>
              <Rating />
            </div>
          </div>
        </div>
      </div>
      <div className="card-container">
        <div className="card-border">
          <div className="card">
            <img src={cardimage4} alt="Image 1" />
            <div className="card-content">
              <h2>Big 4 Auditor Financial Analyst</h2>
              <p>Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik</p>
              <div className="profile-info">
                <img src={profileAvatar} alt="Profile Avatar" />
                <span>Jenna Ortega</span>
                <small>
                  Senior Accountant di <b>Gojek</b>
                </small>
              </div>
              <Rating />
            </div>
          </div>
        </div>
        <div className="card-border">
          <div className="card">
            <img src={cardimage5} alt="Image 2" />
            <div className="card-content">
              <h2>Big 4 Auditor Financial Analyst</h2>
              <p>Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik</p>
              <div className="profile-info">
                <img src={profileAvatar} alt="Profile Avatar" />
                <span>Jenna Ortega</span>
                <small>
                  Senior Accountant di <b>Gojek</b>
                </small>
              </div>
              <Rating />
            </div>
          </div>
        </div>
        <div className="card-border">
          <div className="card">
            <img src={cardimage6} alt="Image 3" />
            <div className="card-content">
              <h2>Big 4 Auditor Financial Analyst</h2>
              <p>Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik</p>
              <div className="profile-info">
                <img src={profileAvatar} alt="Profile Avatar" />
                <span>Jenna Ortega</span>
                <small>
                  Senior Accountant di <b>Gojek</b>
                </small>
              </div>
              <Rating />
            </div>
          </div>
        </div>
      </div>
      <div className="card-container">
        <div className="card-border">
          <div className="card">
            <img src={cardimage7} alt="Image 1" />
            <div className="card-content">
              <h2>Big 4 Auditor Financial Analyst</h2>
              <p>Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik</p>
              <div className="profile-info">
                <img src={profileAvatar} alt="Profile Avatar" />
                <span>Jenna Ortega</span>
                <small>
                  Senior Accountant di <b>Gojek</b>
                </small>
              </div>
              <Rating />
            </div>
          </div>
        </div>
        <div className="card-border">
          <div className="card">
            <img src={cardimage8} alt="Image 2" />
            <div className="card-content">
              <h2>Big 4 Auditor Financial Analyst</h2>
              <p>Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik</p>
              <div className="profile-info">
                <img src={profileAvatar} alt="Profile Avatar" />
                <span>Jenna Ortega</span>
                <small>
                  Senior Accountant di <b>Gojek</b>
                </small>
              </div>
              <Rating />
            </div>
          </div>
        </div>
        <div className="card-border">
          <div className="card">
            <img src={cardimage9} alt="Image 3" />
            <div className="card-content">
              <h2>Big 4 Auditor Financial Analyst</h2>
              <p>Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik</p>
              <div className="profile-info">
                <img src={profileAvatar} alt="Profile Avatar" />
                <span>Jenna Ortega</span>
                <small>
                  Senior Accountant di <b>Gojek</b>
                </small>
              </div>
              <Rating />
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper-down">
        <ul>
          <li>
            <p>NEWSLETTER</p>
          </li>
          <li>
            <h1>Mau Belajar Lebih Banyak?</h1>
          </li>
          <li>
            <p>Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik hariesok.id</p>
          </li>
          <li>
            <div class="inputWithButton">
              <input type="text" placeholder="Masukkan Emailmu" />
              <button>Subscibe</button>
            </div>
          </li>
        </ul>
      </div>
      <div className="wrapper-white">
        <ul className="left-list">
          <li>
            <img src={iconvideobelajar} alt="" />
          </li>
          <li>
            <h3>Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!</h3>
          </li>
          <li>Jl. Usman Effendi No. 50 Lowokwaru, Malang</li>
          <li>+62-877-7123-1234</li>
        </ul>
        <div className="right-lists">
          <ul className="right-list">
            <li>
              <b>kategori</b>
            </li>
            <li>
              <a href="#">Digital & Teknologi</a>
            </li>
            <li>
              <a href="#">Pemasaran</a>
            </li>
            <li>
              <a href="#">Managemant Bisnis</a>
            </li>
            <li>
              <a href="#">Pengembangan Diri</a>
            </li>
            <li>
              <a href="#">Desain</a>
            </li>
          </ul>
          <ul className="right-list">
            <li>
              <b>Perusahaan</b>
            </li>
            <li>
              <a href="#">Tentang Kami</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Kebijakan Privasi</a>
            </li>
            <li>
              <a href="#">Ketentuan Layanan</a>
            </li>
            <li>
              <a href="#">Bantuan</a>
            </li>
          </ul>
          <ul className="right-list">
            <li>
              <b>komunitas</b>
            </li>
            <li>
              <a href="#">Tips Sukses</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer">
        <div className="footer-left">@2023 Gerobak Sayur All Rights Reserved.</div>
        <div className="footer-right">
          <img src={iconFacebook} alt="Social Icon 1" />
          <img src={iconInstagram} alt="Social Icon 2" />
          <img src={iconTwitter} alt="Social Icon 3" />
          <img src={iconLinkedn} alt="Social Icon 4" />
        </div>
      </div>
    </div>
  );
};

export default Beranda;
