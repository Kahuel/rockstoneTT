import React, { useState } from "react";
import { Clock, TextArea } from "./components";
import { useSwipeable } from "react-swipeable";
import "./App.css";

function App() {
  const [margin, setMargin] = useState(0);
  const handlers = useSwipeable({
    onSwipedLeft: (e) => {
      if (margin === 0 && e.velocity >= 1) {
        setMargin(-100);
      }
    },
    onSwipedRight: (e) => {
      if (margin === -100 && e.velocity >= 1) {
        setMargin(0);
      }
    },
  });
  return (
    <div className="container" {...handlers}>
      <div className="elements" style={{ marginLeft: `${margin}vw` }}>
        <div className="block-left element">
          <TextArea />
        </div>
        <div className="block-right element">
          <Clock />
        </div>
      </div>
    </div>
  );
}

export default App;
