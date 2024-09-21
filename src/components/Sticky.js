import "./Sticky.css";
import Money from "../images/Money.svg";

export const Sticky = () => {
  return (
    <section className="sticky-section inner-container container">
      <div className="sticky-left">
        <img src={Money} alt="StickyImage" />
        <div className="sticky-left-content">
          <h3>72 hours</h3>
          <p>to Decide if You Like It</p>
        </div>
      </div>
      <div className="sticky-right">
        <ul>
          <li>Pre-optimised widgets;</li>
          <li>Local fonts included;</li>
          <li>Lazy loading widgets.</li>
        </ul>
      </div>
    </section>
  );
};
