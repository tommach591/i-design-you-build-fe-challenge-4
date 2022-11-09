import "./Carousel.css";

function Carousel({ isMobile }) {
  function getWeb() {
    return <div className="Carousel"></div>;
  }

  function getMobile() {
    return <div>Mobile</div>;
  }

  return isMobile ? getMobile() : getWeb();
}

export default Carousel;
