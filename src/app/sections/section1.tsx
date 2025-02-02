import { Popover } from "antd";
import Animation from "../components/animation";

import Image from "next/image";
export default function Section1() {
  return (
    <section className="section">
      <h1 className="h1">Experiência profissional</h1>
      <ul className="ul">
        <li className="li">
          <Popover
            content={
              <p style={{ display: "flex", maxWidth: 400 }}>
                Neste emprego aprendi a lidar com o cliente, compreendendo o
                problema apresentado e endereçando-o de forma ágil, cortês, e
                objetiva.
              </p>
            }
            title={
              <Image
                alt="logoContaS"
                width={110}
                height={40}
                src="/logo1.png"
              />
            }
          >
            <Animation>Suporte ao cliente em Conta S</Animation>
          </Popover>
        </li>
        <li className="li">
          <Popover
            content={
              <p style={{ display: "flex", maxWidth: 400 }}>
                Atualmente trabalho como balconista na Panvel Farmacias.
              </p>
            }
            title={
              <Image
                alt="logoPanvelFarmacias"
                width={80}
                height={40}
                src="/logoPanvel.jpg"
              />
            }
          >
            <Animation>Consultor de atendimento em Panvel</Animation>
          </Popover>
        </li>
      </ul>
    </section>
  );
}
