import "./styles.css";
import Section1 from "./sections/section1";
import Section2 from "./sections/section2";
import Section3 from "./sections/section3";
import Section4 from "./sections/section4";
export default function Home() {
  return (
    <main className="main">
      <div className="header">
        <div className="div">
          <h1 className="title">
            Olá, sou <span className="inline">Lucas Cincunegui</span>
          </h1>
          <div className="txt-animado">
            <span></span>
          </div>
        </div>
        <Section4 />
      </div>
      <div className="flexBox">
        <Section3 />

        <Section1 />

        <Section2 />
      </div>
    </main>
  );
}
