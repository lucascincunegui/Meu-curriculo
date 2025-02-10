import Image from "next/image";
import Link from "next/link";
export default function Section4() {
  return (
    <div className="div-section-4">
      <div className="div">
        <button className="button">
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
        </button>

        <button className="button">
          <Link href={"/curriculo_lucas_cincunegui.pdf"}>Ver Curriculo</Link>
        </button>
      </div>
    </div>
  );
}
