import React from "react";
import Navbar from "./Navbar";

const Artikel = () => {
  return (
    <Navbar>
      <div className="artikel">
        <h1>Caesar cipper</h1>
        <p>
          Jika belajar mengenai ilmu kriptografi, algoritma populer yang harus
          diketahui adalah Caesar Cipher. Konon, diberi nama demikian karena
          digunakan oleh kaisar Romawi, Julius Caesar untuk menyandikan pesan
          yang ia kirim ke para gubenurnya. Penggunaan Caesar Cipher pada masa
          Romawi menunjukkan kemajuan peradabannya. Padahal di masa itu,
          pengubahan plainteks menjadi cipherteks maupun sebaliknya, amatlah
          rumit. Semua serba manual. Jangankan komputer, lisrik saja belum
          ditemukan. Itulah sebabnya jika dibandingkan demgan algoritma lain di
          zaman modern ini, Caesar Cipher dianggap sebagai metode kriptografi
          paling sederhana, paling lemah dan paling mudah dibobol dengan brute
          force attack. Kalau dipikir-pikir, untung juga kriptografi zaman
          romawi masih Caesar Cipher, coba udah ditemukan fungsi hash. Bisa
          puyeng tuh para gubenur. Caesar Cipher tergolong cipher substitusi.
          Maksudnya, setiap unit plainteks diganti dengan satu unit cipherteks.
          Satu unit bisa berupa huruf, pasangan huruf, atau kelompok huruf.{" "}
        </p>
        <br />
        <p>
          Contohnya begini, tiap huruf plainteks disubstitusi dengan huruf ke
          tiga belas berikutnya dari susunan alphabet. Aturan subsitusi tertuang
          pada Gambar 1. Gambar 1. Contoh tabel Substitusi Caesar Cipher Maka,
          jika plainteks adalah HELLO, maka tiap huruf pada plainteks digeser
          sesuai aturan subsitusi sehingga membentuk cipherteks URYYB.
          Persegeran sejauh 13 ini bisa dianggap sebagai kunci k untuk enkripsi
          maupun dekripsi. Dengan demikin. fungsi enkripsi Caesar Cipher dapat
          dirumuskan dengan C = E(P) = (P+k) mod 26 dan fungsi dekripsi menjadi
          P=D(C) = (C-k) mod 26 Tentu fungsi tersebut bisa dikembangkan lagi.
          Jika hanya terbatas mod 26, tentu kompleksitas kriptografi menjadi
          sangat rendah. Karena mod 26 menunjukkan jumlah alphabet. Bisa saja
          mod 26 ini diganti sesuai karakter yang terpampang pada keyboard
          komputer kekinian. Karakter modern ini mengacu ke ASCII (American
          Standart Code for Information Interchange). Sebanyak 256 karakter.
          Dari karakter ke 0 hingga ke 255. Jadi mod-nya akan berubah dari 26 ke
          256. Sehingga kompleksitas terangkat, walau sedikit. Kalau zaman
          romawi menerapkan mod 26 ya wajar banget. Sesuai dengan teknologi
          zaman itu. Mod 26 pada Caesar Cipher dapat digunakan sebagai latihan
          untuk menerapkan algoritma kriptografi dalam bahasa pemrograman.
          Berikut ini contoh implementasi Caesar Cipher menggunakan pemrograman
          C++. InsyaAllah di artikel lain, saya tunjukkan implementasi Caesar
          Cipher menggunakan pemrograman java berdasarkan 256 karakter ASCII.{" "}
        </p>
      </div>
    </Navbar>
  );
};

export default Artikel;
