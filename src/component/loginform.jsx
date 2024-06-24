import Brandimage from "../assets/image/laptop-login.png";
import Logo from "../assets/image/critizn2.png";
import { Link } from "react-router-dom";
import "../style/login.css"

export default function Login() {
  return (
    <section>
      <div className="cover">
        <img src={Logo} alt="critizn" className="brand-logo" />
        <img src={Brandimage} alt="Image" className="image-cover" />
      </div>
      <div className="wrapper">
        <form action="">
          <h1>Masuk</h1>
          <div className="under-line"></div>
          <div className="input-box">
            <input type="email" placeholder="Username/Email" required />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
          </div>

          <div className="acception">
            <label htmlFor="">
              <input type="checkbox" />
              Terima Persetujuan
            </label>
          </div>

          <button type="submit" className="btn">
            Submit
          </button>

          <div className="under-line"></div>

          <div className="create">
            <Link to="/Forget">Lupa Password</Link>
            <Link to="/Register">Belum Punya Akun ?</Link>
          </div>
        </form>
      </div>
    </section>
  );
}
