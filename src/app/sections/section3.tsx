import Image from "next/image";
import { DiJavascript1 } from "react-icons/di";
import { FaGithub, FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiJira } from "react-icons/si";

export default function Section3() {
  return (
    <section className="section">
      <h1 className="h1">Conhecimentos</h1>

      <ul className="ul-skills">
        <li className="li-skills">
          <FaReact className="li-icon" size={28} style={{ color: "#087ea4" }} />
          <span className="li">React</span>
        </li>
        <li className="li-skills">
          <DiJavascript1
            className="li-icon"
            size={28}
            style={{ color: "#ffd600" }}
          />
          <span className="li">Javascript</span>
        </li>
        <li className="li-skills">
          <SiTypescript
            className="li-icon"
            size={24}
            style={{ color: "#2f82cf" }}
          />
          <span className="li">Typescript</span>
        </li>

        <li className="li-skills">
          <Image
            className="li-icon"
            alt="iconFigma"
            width={20}
            height={25}
            src="/figma.png"
          />
          <span className="li">Figma</span>
        </li>
        <li className="li-skills">
          <FaGithub size={28} className="li-icon" />
          <span className="li">Github</span>
        </li>
        <li className="li-skills">
          <SiJira className="li-icon" size={26} style={{ color: "#1868db" }} />
          <span className="li">Jira</span>
        </li>
        <li className="li-skills">
          <Image
            className="li-icon"
            alt="iconTawkTo"
            width={33}
            height={30}
            src="/tawkTo.png"
          />
          <span className="li">Tawk.To</span>
        </li>
      </ul>
    </section>
  );
}
