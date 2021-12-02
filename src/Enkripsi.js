import React, { useState } from "react";
import { Link } from "react-router-dom";
import swal from "@sweetalert/with-react";

const Enkripsi = () => {
  const [abjad, setAbjad] = useState("abcdefghijklmnopqrstuvwxyz");
  const [string, setString] = useState("");
  const [kunci, setKunci] = useState();

  const enkrip = () => {
    console.log(typeof key);
    var str = string.toLowerCase();
    var key = parseInt(kunci);
    var result = "";
    for (var i = 0; i < str.length; i++) {
      var char = str[i];
      if (abjad.includes(char)) {
        var n = abjad.indexOf(char);
        var encrypt = (n + key) % 26;
        var convert = abjad[encrypt];
        result = result + convert;
      } else {
        result = result + " ";
      }
    }
    setTimeout(() => {
      swal(
        <div className="hasil">
          <p>Hasilnya : </p>
          <h1>{result}</h1>
        </div>
      );
    }, 1000);
  };
  return (
    <div>
      <div className="title">
        <h1>Enkripsi</h1>
        <p>
          Enkripsi kalimat kini lebih mudah dengan kami, masukkan kalimat dan
          isikan kuncinya
        </p>
      </div>
      <div className="form-input">
        <div className="input">
          <label htmlFor="plaintext">Plaintext</label>
          <input
            onChange={(e) => setString(e.target.value)}
            type="text"
            name="plaintext"
            placeholder="Masukkan text di sini ..."
          />
        </div>
        <div className="input">
          <label htmlFor="key">Kunci</label>
          <input
            onChange={(e) => setKunci(e.target.value)}
            type="text"
            name="key"
            placeholder="Masukkan kunci di sini ..."
          />
        </div>
        <button onClick={() => enkrip()} className="btn-primary">
          Enkripsi
        </button>
        <Link className="btn-secondary" to="/choose">
          Kembali
        </Link>
      </div>
    </div>
  );
};

export default Enkripsi;
