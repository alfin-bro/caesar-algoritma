import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="hero">
        <h1 className="hero-title">Caesar cipper</h1>
        <p>
          Sebuah aplikasi untuk mendapatkan cipper ataupun plaintext dengan
          mudah, anda hanya memasukkan plaintext ataupun cippernya beserta
          kuncinya maka lihat , hasilnya akan memuaskan anda , ayo coba
          sekarang!
        </p>
        <Link to="/choose" className="btn-primary">
          Mulai
        </Link>
      </div>
      <footer>Design and develop by Alfin & team</footer>
    </div>
  );
};

export default Home;
