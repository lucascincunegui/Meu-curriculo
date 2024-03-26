import styles from "./page.module.css";
export default function Home() {
  //quais idiomas sei
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <section className={styles.profile}>
          {/* <img src="/curriculo.png" className={styles.img} /> */}
          <div className={styles.div}>
            <h1 className={styles.title}>
              Ola, sou <span className={styles.inline}>Lucas Cincunegui</span>
            </h1>
          </div>
        </section>
      </div>
      <div className={styles.flexBox}>
        <section className={styles.section}>
          <h1 className={styles.h1}>Experiência profissional</h1>

          <ul className={styles.ul}>
            <li className={styles.li}>
              Suporte ao cliente em Conta S, neste emprego aprendi a lidar com o
              cliente, compreendendo o problema apresentado e endereçando-o de
              forma ágil, cortês, e objetiva.
            </li>
            <li>Atualmente trabalho como balconista na Panvel Farmácias.</li>
          </ul>
        </section>
        <section className={styles.section}>
          <h1 className={styles.h1}>Sobre mim</h1>

          <ul className={styles.ul}>
            <li className={styles.li}>
              Estou cursando Analise e Desenvolvimento de sistemas na faculdade
              Cruzeiro do Sul.
            </li>
            <li className={styles.li}>
              Me esforço por aprender de backend tanto como de frontend,
              particularmente gosto mais do frontend.
            </li>
            <li className={styles.li}>Fluência em espanhol e português.</li>
            <li className={styles.li}>
              Nasci no Brasil, mas toda minha infância morei no Uruguai,
              atualmente resido na fronteira.
            </li>
          </ul>
        </section>
        <section className={styles.section}>
          <h1>Conhecimentos</h1>
          {/* Grafica pizza */}
          <ul className={styles.ul}>
            <li className={styles.li}>Javascript</li>
            <li className={styles.li}>Typescript</li>
            <li className={styles.li}>React</li>
          </ul>
        </section>
        <div className={styles.section}>
          <h1 className={styles.h1}>Redes sociais</h1>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <a href="mailto:lucascincunegui@gmail.com" className={styles.a}>
                lucascincunegui@gmail.com
              </a>
            </li>
            <li className={styles.li}>
              <a
                className={styles.a}
                href="https://github.com/lucascincunegui?tab=repositories"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
