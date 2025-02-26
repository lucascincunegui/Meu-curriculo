import "./styles.css";
import Section1 from "./sections/section1";
import Section2 from "./sections/section2";
import Section3 from "./sections/section3";
import Nav from "./components/nav";
import TextTyping from "./components/textTyping";
export default function Home() {
  return (
    <main className="main">
      <header className="header">
        <div className="profile">
          <h1 className="title">
            Olá, sou <span className="inline">Lucas Cincunegui</span>
          </h1>
          <TextTyping />
        </div>
        <Nav />
      </header>
      <div className="grid">
        <Section3 />

        <Section1 />

        <Section2 />
      </div>
    </main>
  );
}
