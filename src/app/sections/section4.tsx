import Image from "next/image";

import { FaRegFilePdf } from "react-icons/fa6";
export default function Section4() {
  return (
    <div className="div-btn">
      <button className="btn">
        <FaRegFilePdf style={{ marginRight: 10, width: 20, height: 20 }} />

        <a href="/curriculo_lucas_cincunegui.pdf" className="a">
          Ver Curriculo
        </a>
      </button>
      <button className="btn">
        <Image
          alt="iconGmail"
          width={20}
          height={20}
          src="/gmail.png"
          className="li-icon-contact"
        />
        <a href="mailto:lucascincunegui@gmail.com" className="a">
          lucascincunegui@gmail.com
        </a>
      </button>
    </div>
  );
}
