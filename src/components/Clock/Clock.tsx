import React, { useState, useEffect } from "react";
import "./clock.css";

export const Clock: React.FC = () => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    setTimeout(() => {
      setDate(new Date());
    }, (60 - date.getSeconds()) * 1000);
  }, [date]);
  return (
    <div className="clock-container">
      {date.toLocaleTimeString(navigator.language, {
        hour: "2-digit",
        minute: "2-digit",
      })}
    </div>
  );
};
