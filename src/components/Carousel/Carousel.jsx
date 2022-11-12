import { useCallback, useEffect, useState } from "react";
import "./Carousel.css";

function Carousel({ isMobile, data }) {
  const [carousel, setCarousel] = useState(data.slice(0, 6));
  const [timer, setTimer] = useState(5);
  const [index, setIndex] = useState(0);
  const [next, setNext] = useState(1);
  const [prev, setPrev] = useState(5);

  const rotateLeft = useCallback(() => {
    prev > 0 ? setPrev(prev - 1) : setPrev(5);
    setIndex(prev);
    setNext(index);
  }, [index, prev]);

  const rotateRight = useCallback(() => {
    setPrev(index);
    setIndex(next);
    next < 5 ? setNext(next + 1) : setNext(0);
  }, [index, next]);

  useEffect(() => {
    const interval = setInterval(() => {
      let newTimer = timer - 1;
      if (newTimer === 0) {
        newTimer = 5;
        rotateRight();
      }
      setTimer(newTimer);
    }, [1000]);

    return () => {
      clearInterval(interval);
    };
  }, [timer, rotateRight]);

  useEffect(() => {
    setCarousel(data.slice(0, 6));
  }, [data]);

  function getWeb() {
    return (
      <div className="Carousel">
        {carousel.length > 0 ? (
          <div className="CarouselImages">
            <img
              key={carousel[prev].id}
              className="Faded"
              src={carousel[prev].image}
              alt={carousel[prev].title}
              onClick={() => {
                rotateLeft();
                setTimer(5);
              }}
            />
            <img
              key={carousel[index].id}
              className="Bright"
              src={carousel[index].image}
              alt={carousel[index].title}
              onClick={() => {
                window.location.href = carousel[index].link;
              }}
            />
            <img
              key={carousel[next].id}
              className="Faded"
              src={carousel[next].image}
              alt={carousel[next].title}
              onClick={() => {
                rotateRight();
                setTimer(5);
              }}
            />
          </div>
        ) : (
          <div />
        )}
        <div className="CircleSlider">
          {carousel.map((e, i) => {
            return (
              <div
                className={index === i ? "Circle On" : "Circle Off"}
                key={i}
                onClick={() => {
                  i > 0 ? setPrev(i - 1) : setPrev(5);
                  setIndex(i);
                  i < 5 ? setNext(i + 1) : setNext(0);
                  setTimer(5);
                }}
              />
            );
          })}
        </div>
      </div>
    );
  }

  function getMobile() {
    return <div>Mobile</div>;
  }

  return isMobile ? getMobile() : getWeb();
}

export default Carousel;
