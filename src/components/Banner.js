import "./Banner.css";
import Logo from "../images/logo.jpeg";
import FloatingBg from "../images/floating-bg.svg";
import Typewriter from "./Typewriting";

export const Banner = () => {
  const words = ["Medical", "Physiotherapy Center", "Rehabilitation Clinic"];
  return (
    <section className="banner-section container">
      <div className="banner">
        <div className="banner-logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="banner-content">
          <h1>
            Create your{" "}
            <span className="active-color">{<Typewriter words={words} />}</span>{" "}
            website with Renew Medical.
          </h1>
          <p>Elementor based Health & Rehabilitation WordPress Theme.</p>
        </div>
      </div>
      <img className="floating-bg" src={FloatingBg} alt="FloatingBg" />
    </section>
  );
};
