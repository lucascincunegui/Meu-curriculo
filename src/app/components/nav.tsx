"use client";

import { useLayoutEffect, useRef } from "react";

export default function Nav() {
  const sectionRef = useRef<HTMLDivElement>(null);
  let show = true;

  const toggle = () => {
    sectionRef.current?.classList.toggle("on", show);
    document.body.style.overflow = show ? "hidden" : "initial";
    show = !show;
  };

  useLayoutEffect(() => {
    window.addEventListener("resize", () => {
      sectionRef.current?.classList.remove("on");
    });
  }, []);

  return (
    <div ref={sectionRef} className="menu-section">
      <div className="menu-toggle" onClick={toggle}>
        <div className="one"></div>
        <div className="two"></div>
        <div className="three"></div>
      </div>
      <nav className="nav">
        <ul>
          <li className="btn">
            <a
              className="a"
              target="_blank"
              href="/curriculo_lucas_cincunegui.pdf"
            >
              Curriculo
            </a>
          </li>

          <li className="btn">
            <a
              className="a"
              target="_blank"
              href="https://github.com/lucascincunegui"
            >
              Github
            </a>
          </li>
          <li className="btn">
            <a
              className="a"
              target="_blank"
              href="mailto:lucascincunegui@gmail.com"
            >
              Enviar Email
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
