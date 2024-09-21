import "./Header.css";
import Logo from "../images/logo.jpeg";

export const Header = () => {
  return (
    <header className="container">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <nav>
        <ul>
          <li>
            <a className="plain">demo</a>
          </li>
          <li>
            <a className="plain">Features</a>
          </li>
          <li>
            <a className="plain">Post Types</a>
          </li>
          <li>
            <a className="plain">Layouts</a>
          </li>
          <li>
            <a className="plain">Plugins</a>
          </li>
        </ul>
      </nav>
      <a href="#" className="button">
        Purchase Now
      </a>
    </header>
  );
};
