import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { textActions } from "store/actions";

export const InputForm: React.FC = () => {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();
  return (
    <form
      className="inputArea"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(textActions.addText(inputText));
        setInputText("");
      }}
    >
      <input
        required
        placeholder="Textarea"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      ></input>
      <button>Send</button>
    </form>
  );
};
