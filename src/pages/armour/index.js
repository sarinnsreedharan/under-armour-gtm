import { useState } from "react";
import { useEffect } from "react";

export default function Armour() {
  const [textValue, setTextValue] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "pageView",
      page_path: 'sarin'
    });
  }, []);
  const armourButtonClicked = () => {
    setButtonClicked(!buttonClicked);
  };

  return (
    <>
      <input
        type="text"
        value={textValue}
        onChange={(e) => {
          setTextValue(e.target.value);
        }}
      />
      <button onClick={armourButtonClicked}>Click me!</button>
      {buttonClicked && (
        <>
          <h2>The word you have entered is:</h2>
          <span>{textValue}</span>
        </>
      )}
    </>
  );
}
