import "./App.css";
import { select } from "../../utils/supabase.js";
import { useEffect, useState, useRef } from "react";
import { useMobile } from "../../utils/useMobile";
import Header from "../Header";
import Carousel from "../Carousel";
import GameList from "../GameList";

function App() {
  const [data, setData] = useState([]);
  const [isBottom, setIsBottom] = useState(false);

  const listInnerRef = useRef();
  const isMobile = useMobile();

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        setIsBottom(true);
      }
    }
  };

  useEffect(() => {
    select("*").then((res) => {
      setData(res);
    });
  }, []);

  return (
    <div className="App" onScroll={onScroll} ref={listInnerRef}>
      <div className="Background">
        <div className="Ellipse" />
      </div>
      <Header isMobile={isMobile} />
      <Carousel isMobile={isMobile} data={data} />
      <GameList
        isMobile={isMobile}
        data={data}
        isBottom={isBottom}
        setIsBottom={setIsBottom}
      />
    </div>
  );
}

export default App;
