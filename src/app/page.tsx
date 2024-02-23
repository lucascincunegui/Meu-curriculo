import styles from "./page.module.css";
import { IoIosMail } from "react-icons/io";
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <section className={styles.profile}>
          <img src="/curriculo.png" className={styles.img} />
          <div className={styles.div}>
            <h1>Lucas Cincunegui</h1>
            <p className={styles.p}>Web developer, estudante</p>
          </div>
        </section>
        <section className={styles.profile}>
          <IoIosMail style={{ fontSize: 20, margin: 10, color: "#3d3d3d" }} />
          <a href="mailto:lucascincunegui@gmail.com" className={styles.a}>
            lucascincunegui@gmail.com
          </a>
        </section>
      </div>
      <section className={styles.section}>
        <h1 className={styles.h1}>Experiência profissional</h1>
        <ul className={styles.ul}>
          <li>
            Suporte ao cliente em Conta S, ali aprendí a lidar diretamente com o
            cliente, compreendendo o problema apresentado e endereçando-o de
            forma ágil, cortês, e objetiva; Relacionar-se com o cliente de forma
            cordial e profissional.
          </li>
          <li>Atualmente trabalho como balconista na Panvel Farmacias.</li>
        </ul>
      </section>
      <section className={styles.section}>
        <h1 className={styles.h1}>Sobre mim</h1>
        <ul className={styles.ul}>
          <li>
            Estou cursando Analise e Desenvolvimento de sistemas na faculdade
            Cruzeiro do Sul.
          </li>
          <li>Fluência em espanhol e portugues.</li>
          <li>
            Nascí no Brasil, mas toda minha infancia morei no Uruguay,
            atualmente resido em Rio Branco - Uruguai cidade fronteriza com
            Jaguarão - RS.
          </li>
        </ul>
      </section>
    </main>
  );
}
