import Image from "next/image";

export default function Section4() {
  return (
    <section className="section">
      <h1>Meu contato</h1>

      <ul className="ul">
        <li className="div-contact">
          <Image
            alt="iconGmail"
            width={18}
            height={18}
            src="/gmail.png"
            className="li-icon-contact"
          />
          <a href="mailto:lucascincunegui@gmail.com" className="a">
            lucascincunegui@gmail.com
          </a>
        </li>
      </ul>
    </section>
  );
}
