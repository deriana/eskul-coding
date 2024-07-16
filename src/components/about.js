import "./about.css";
import AboutLogo from "../assets/code.png";

function About() {
  return (
    <div className="about">
      <div className="about-title">
        <img src={AboutLogo} alt="tent-logo"></img>
        <h2>About Proggraming</h2>
      </div>
      <p>
        Pemrograman adalah proses menulis kode untuk membuat perangkat lunak
        atau aplikasi dengan menggunakan bahasa seperti Python, Java, atau C++.
        Ini melibatkan penulisan algoritma, penggunaan variabel, fungsi, dan
        kontrol aliran untuk memberikan instruksi kepada komputer. Tujuannya
        adalah untuk menyelesaikan masalah atau melakukan tugas tertentu. Proses
        ini juga melibatkan debugging untuk menemukan dan memperbaiki kesalahan
        dalam kode. Pemrograman penting dalam pengembangan teknologi, termasuk
        aplikasi web, mobile, kecerdasan buatan, dan analisis data.
      </p>
      <div className="line"></div>
    </div>
  );
}

export default About;
