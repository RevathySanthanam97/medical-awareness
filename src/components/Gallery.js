import "./Gallery.css";
import EconImage from "../images/EconImage.webp";
import Arrow from "../images/Arrow.svg";

export const Gallery = () => {
  return (
    <section className="gallery-section inner-container container">
      <div className="gallery-left">
        <div className="gallery-item">
          <img src={EconImage} alt="Gallery Image" />
          <h4><a href="#">Home One</a></h4>
          <a href="#">View More <img src={Arrow} /></a>
        </div>
      </div>
      <div className="gallery-right">
        <div className="gallery-item">
          <img src={EconImage} alt="Gallery Image" />
          <h4><a href="#">Home One</a></h4>
          <a href="#">View More <img src={Arrow} /></a>
        </div>
        <div className="gallery-item">
          <img src={EconImage} alt="Gallery Image" />
          <h4><a href="#">Home One</a></h4>
          <a href="#">View More <img src={Arrow} /></a>
        </div>
      </div>
    </section>
  );
};
