import React from "react";

export default function Animation({ children }: any) {
  return (
    <div>
      <p>
        {children}
        <span></span>
      </p>
    </div>
  );
}
