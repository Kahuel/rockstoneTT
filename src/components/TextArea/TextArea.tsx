import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import _ from "lodash";
import { Span } from "./Span";
import { InputForm } from "./InputForm";
import "./textArea.css";

export const TextArea: React.FC = () => {
  const textArray = useSelector((store: { text: string[] }) => store.text);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [textArray]);
  return (
    <div className="textArea" hidden={false}>
      <InputForm />
      <div className="messages">
        {textArray.map((e: string, index: number) => {
          if (index === textArray.length - 1) {
            return (
              <div ref={ref}>
                {e.split(" ").map((word: string, i: number) => (
                  <Span
                    key={"span" + i}
                    timeout={400 * (i + 1)}
                    string={word}
                  />
                ))}
              </div>
            );
          }
          return <p key={"p" + index}>{e}</p>;
        })}
      </div>
    </div>
  );
};
