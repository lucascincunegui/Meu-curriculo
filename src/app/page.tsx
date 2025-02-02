import "./styles.css";
import { FaReact } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import Section1 from "./sections/section1";
import Section2 from "./sections/section2";
import Section3 from "./sections/section3";
import Section5 from "./sections/section5";
import Section4 from "./sections/section4";
export default function Home() {
  return (
    <main className="main">
      <div className="header">
        <section className="profile">
          <div className="div">
            <h1 className="title">
              Ola, sou <span className="inline">Lucas Cincunegui</span>
            </h1>
            <small className="padding">Front-End Developer</small>
            <span className="padding">
              <FaReact style={{ color: "#087ea4" }} />
              <DiJavascript1 style={{ color: "#ffd600" }} />
            </span>
          </div>
        </section>
      </div>
      <div className="flexBox">
        <Section2 />

        <Section3 />

        <Section1 />

        <Section4 />

        <Section5 />
      </div>
    </main>
  );
}
