import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import HeroSection from "./Components/HeroSection/HeroSection";
import Section2 from "./Components/Section2/Section2";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HeroSection />
      <Section2 />
    </>
  );
}

export default App;
