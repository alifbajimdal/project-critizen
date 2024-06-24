import Brandimage from "../assets/image/laptop-login.png";
import Logo from "../assets/image/critizn2.png";
import { Link } from "react-router-dom";
import "../style/register.css";

export default function Register() {
  return (
    <section>
      <div className="cover1">
        <img src={Logo} alt="critizn" />
        <img src={Brandimage} alt="brand" />
      </div>
      <div className="wrapper1">
        <form action="">
          <h1>Buat Akun</h1>
          <div className="under-line"></div>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
          </div>
          <div className="input-box">
            <input type="text" placeholder="Email" required />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
          </div>

          <button type="submit" className="btn">
            Submit
          </button>

          <div className="under-line"></div>

          <div className="create">
            <Link to="/Login">Sudah Punya Akun ?</Link>
          </div>
        </form>
      </div>
    </section>
      );
}
