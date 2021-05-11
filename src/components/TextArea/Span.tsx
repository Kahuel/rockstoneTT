import React, { useState } from "react";
import "./span.css";

export const Span: React.FC<{ timeout: number; string: string }> = ({
  timeout,
  string,
}) => {
  const [opacity, setOpacity] = useState(0);
  setTimeout(() => {
    setOpacity(1);
  }, timeout);
  return (
    <span className="span" style={{ opacity: opacity }}>
      {string}{" "}
    </span>
  );
};
