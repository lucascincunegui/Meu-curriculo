import Image from "next/image";

import { FaRegFilePdf } from "react-icons/fa6";
export default function Section4() {
  return (
    <div className="div-btn">
      <a target="_blank" href="/curriculo_lucas_cincunegui.pdf" className="a">
        <button className="btn">
          <FaRegFilePdf style={{ marginRight: 10, width: 20, height: 20 }} />
          Ver Curriculo
        </button>
      </a>
      <a target="_blank" href="mailto:lucascincunegui@gmail.com" className="a">
        <button className="btn">
          <Image
            alt="iconGmail"
            width={20}
            height={20}
            src="/gmail.png"
            className="li-icon-contact"
          />
          lucascincunegui@gmail.com
        </button>
      </a>
    </div>
  );
}
