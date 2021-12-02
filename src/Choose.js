import React from "react";
import { Link } from "react-router-dom";

const Choose = () => {
  return (
    <div className="choose-menu">
      <p className="subtitle-choose">
        Selamat datang di aplikasi algoritma caesar
      </p>
      <h1>Silahkan pilih menu!</h1>
      <div className="btn-wrapper">
        <Link to="/enkripsi" className="btn-primary kiri">
          Enkripsi
        </Link>
        <Link to="/dekripsi" className="btn-primary">
          Dekripsi
        </Link>
      </div>
      <Link to="/" className="btn-secondary">
        Kembali
      </Link>
    </div>
  );
};

export default Choose;
