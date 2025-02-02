import React from "react";

export default function Animation({ children }: any) {
  return (
    <div className="li-animated">
      <h3>
        {children}
        <span></span>
      </h3>
    </div>
  );
}
