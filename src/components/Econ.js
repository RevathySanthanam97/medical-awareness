import "./Econ.css";
import FloatingText from "../images/FloatingText.png";
import EconImage from "../images/EconImage.webp";

export const Econ = () => {
  return (
    <section className="econ-section inner-container container">
      <div className="econ-left">
        <h2>Google PageSpeed Insights Performance Score 80+</h2>
        <h6>GET AN IMPRESSIVE PERFORMANCE SCORE WITH:</h6>
        <ul>
          <li>Pre-optimised widgets;</li>
          <li>Local fonts included;</li>
          <li>Lazy loading widgets.</li>
        </ul>
        <p>Improve your page load time even further by using WordPress caching plugins and optimising your images.</p>
      </div>
      <div className="econ-right">
        <img src={EconImage} alt="EconImage" />
        <img className="floating-text" src={FloatingText} alt="Signs to watch out" />
      </div>
    </section>
  );
};
