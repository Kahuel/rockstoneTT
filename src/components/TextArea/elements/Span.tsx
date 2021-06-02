import React, { useState, useEffect } from "react";
import "./span.css";

export const Span: React.FC<{ timeout: number; string: string }> = ({
  timeout,
  string,
}) => {
  const [opacity, setOpacity] = useState(0);
  useEffect(() => {
    const id = setTimeout(() => {
      setOpacity(1);
    }, timeout);
    return () => {
      clearTimeout(id);
    };
  }, []);

  return (
    <span className="span" style={{ opacity: opacity }}>
      {string}{" "}
    </span>
  );
};
