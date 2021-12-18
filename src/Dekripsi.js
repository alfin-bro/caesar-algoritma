import swal from "@sweetalert/with-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Dekripsi = () => {
  const [abjad, setAbjad] = useState("abcdefghijklmnopqrstuvwxyz");
  const [string, setString] = useState("");
  const [kunci, setKunci] = useState();

  const enkrip = () => {
    var str = string.toLowerCase();
    var key = parseInt(kunci);
    var result = "";
    for (var i = 0; i < str.length; i++) {
      let char = str[i];
      if (abjad.includes(char)) {
        var n = abjad.indexOf(char);
        var encrypt = (n - key) % 26;
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
        <h1>Dekripsi</h1>
        <p>
          Dekripsi kalimat kini lebih mudah dengan kami, masukkan kalimat dan
          isikan kuncinya
        </p>
      </div>
      <div className="form-input">
        <div className="input">
          <label htmlFor="plaintext">Chippertext</label>
          <input
            onChange={(e) => setString(e.target.value)}
            type="text"
            name="plaintext"
            placeholder="Masukkan cipper di sini ..."
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
          Dekripsi
        </button>
        <Link className="btn-secondary" to="/choose">
          Kembali
        </Link>
      </div>
    </div>
  );
};

export default Dekripsi;
