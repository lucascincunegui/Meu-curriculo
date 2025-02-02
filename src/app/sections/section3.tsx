import { DiJavascript1 } from "react-icons/di";
import { FaGithub, FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

export default function Section3() {
  return (
    <section className="section">
      <h1>Conhecimentos</h1>

      <ul className="ul">
        <div className="li-div">
          <DiJavascript1
            className="li-icon"
            size={28}
            style={{ color: "#ffd600" }}
          />
          <li className="li">Javascript</li>
        </div>
        <div className="li-div">
          <SiTypescript
            className="li-icon"
            size={25}
            style={{ color: "#2f82cf" }}
          />
          <li className="li">Typescript</li>
        </div>
        <div className="li-div">
          <FaReact className="li-icon" size={28} style={{ color: "#087ea4" }} />
          <li className="li">React</li>
        </div>
        <div className="li-div">
          <li className="li">
            <FaGithub size={28} className="li-icon" />
            <a
              className="text-xs"
              href="https://github.com/lucascincunegui?tab=repositories"
            >
              Github
            </a>
          </li>
        </div>
      </ul>
    </section>
  );
}
