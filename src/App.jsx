import { useState } from "react";
import Headers from "./components/Header/Header.jsx";
import "./App.css";
import Hero from "./components/Hero/Hero.jsx";
import TongQuan from "./components/TongQuan/TongQuan.jsx";
import Position from "./components/Position/Position.jsx";
import TienIch from "./components/TienIch/TienIch.jsx";
import Carousel from "./components/Casourel/Carousel.jsx";
import MatbangTang from "./components/MatBang/MatBangTang.jsx";
import GetInfor from "./components/Getinfor/GetInfor.jsx";
import CanHo from "./components/CanHo/CanHo.jsx";
import Chinhsachuudai from "./components/ChinhSachUuDai/ChinhSachUuDai.jsx";
import CSBH from "./components/CSBH/CSBH.jsx";
import Footer from "./components/Footer/Footer.jsx";
import PositionMap from "./components/PositionMap/PositionMap.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Headers />
      <Hero />
      <TongQuan />
      <Position />
      <PositionMap />
      <Carousel />
      <GetInfor />
      <MatbangTang />
      <CanHo />
      <GetInfor />
      <Chinhsachuudai />
      <CSBH />
      <Footer />
    </>
  );
}

export default App;
