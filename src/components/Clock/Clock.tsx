import React, { useState, useEffect } from "react";
import "./clock.css";

export const Clock: React.FC = () => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);
  return (
    <div className="clock-container">
      {date.toLocaleTimeString(navigator.language, {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })}
    </div>
  );
};
