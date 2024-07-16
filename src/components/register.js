import "./register.css"
import Poster from "../assets/poster.png"

function Register() {
    return (
        <div className="register">
            <h2>Register</h2>
            <a href="https://forms.gle/6cy76VZeyx2bCRtc6" target="blank">
                <button>Register Here!</button>
            </a>
            <img src={Poster} alt="poster"></img>
        </div>
    )
}

export default Register