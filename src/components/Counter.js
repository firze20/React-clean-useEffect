import React, { useState, useEffect } from "react";

export default function Counter() {
  const [clickCount, setClickCount] = useState(0);
  // your code here

  useEffect(() => {
    document.addEventListener("mousedown", increment);
    //clean Effect
    return () => {
      document.removeEventListener("mousedown", increment);
    };
  });

  const increment = () => {
    setClickCount((previousCount) => previousCount + 1);
  };
  return <h1>Document Clicks: {clickCount}</h1>;
}
