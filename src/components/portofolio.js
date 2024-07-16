import "./portofolio.css";
import porto1 from "../assets/3d-1.jpg";
import porto2 from "../assets/3d-2.jpg";
import porto3 from "../assets/3d-3.jpg";
import porto4 from "../assets/web-1.png";
import porto5 from "../assets/web-2.png";
import porto6 from "../assets/web-3.png";

function Porto() {
  return (
    <div className="porto-container">
      <h3>PORTOFOLIO</h3>
      <div className="porto">
        <img src={porto1} alt="porto"></img>
        <img src={porto2} alt="porto"></img>
        <img src={porto3} alt="porto"></img>
        <img src={porto4} alt="porto"></img>
        <img src={porto6} alt="porto"></img>
        <img src={porto5} alt="porto"></img>
      </div>
    </div>
  );
}

export default Porto;
