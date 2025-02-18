import Image from "next/image";
import { DiJavascript1 } from "react-icons/di";
import { FaFigma, FaGithub, FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiJira } from "react-icons/si";

export default function Section3() {
  return (
    <section className="section">
      <h1 className="h1">Conhecimentos</h1>

      <ul className="ul-skills">
        <div className="li-skills">
          <FaReact className="li-icon" size={28} style={{ color: "#087ea4" }} />
          <li className="li">React</li>
        </div>
        <div className="li-skills">
          <DiJavascript1
            className="li-icon"
            size={28}
            style={{ color: "#ffd600" }}
          />
          <li className="li">Javascript</li>
        </div>
        <div className="li-skills">
          <SiTypescript
            className="li-icon"
            size={24}
            style={{ color: "#2f82cf" }}
          />
          <li className="li">Typescript</li>
        </div>

        <div className="li-skills">
          <Image
            className="li-icon"
            alt="iconFigma"
            width={20}
            height={25}
            src="/figma.png"
          />
          <li className="li">Figma</li>
        </div>
        <div className="li-skills">
          <li className="li">
            <FaGithub size={28} className="li-icon" />
            <a
              target="_blank"
              className="a"
              href="https://github.com/lucascincunegui?tab=repositories"
            >
              Github
            </a>
          </li>
        </div>
        <div className="li-skills">
          <SiJira className="li-icon" size={26} style={{ color: "#1868db" }} />
          <li className="li">Jira</li>
        </div>
        <div className="li-skills">
          <Image
            className="li-icon"
            alt="iconTawkTo"
            width={33}
            height={30}
            src="/tawkTo.png"
          />
          <li className="li">Tawk.To</li>
        </div>
      </ul>
    </section>
  );
}
