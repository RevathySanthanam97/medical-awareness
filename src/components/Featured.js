import "./Featured.css";
import Featured1 from "../images/Featured1.png";
import Featured2 from "../images/Featured2.png";
import Featured3 from "../images/Featured3.png";
import Featured4 from "../images/Featured4.png";

export const Featured = () => {
  const data = [
    {
      img: Featured1,
      title: "Power Elite Author",
      desc: "Trusted by 100,000+ customers",
    },
    {
      img: Featured2,
      title: "Elementor Page Builder",
      desc: "Trusted by 5,000,000+ customers",
    },
    {
      img: Featured3,
      title: "GDPR Compliance",
      desc: "GDPR Compliance",
    },
    {
      img: Featured4,
      title: "Translation Ready",
      desc: "Compatible with WPML plugin",
    },
  ];
  return (
    <section className="feature-section container">
      <div className="featured">
        {data.map((feature) => (
          <div className="featured-item">
            <img src={feature.img} alt={feature.title} />
            <h5>{feature.title}</h5>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
