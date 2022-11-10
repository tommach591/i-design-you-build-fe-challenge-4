import "./App.css";
import { select } from "../../utils/supabase.js";
import { useEffect, useState } from "react";
import { useMobile } from "../../utils/useMobile";
import Header from "../Header";
import Carousel from "../Carousel";

function App() {
  const [data, setData] = useState([]);

  const isMobile = useMobile();

  useEffect(() => {
    select("*").then((res) => {
      setData(res);
    });
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="App">
      <Header isMobile={isMobile} />
      <Carousel isMobile={isMobile} data={data} />
      <div className="Background">
        <div className="Ellipse" />
      </div>
    </div>
  );
}

export default App;
