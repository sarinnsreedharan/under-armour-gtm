import { useState } from "react";
import { useEffect } from "react";

export default function Armour() {
  const [textValue, setTextValue] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "pageView",
      page_path: "sarin",
      page_url_from_code:"url from code"
    });
  }, []);
  const armourButtonClicked = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "gtm.click",
      gtm: {
        uniqueEventId: 10,
        start: 1727441896509,
        element: "Just a normal dummy element",
        elementClasses: "987",
        elementId: "1234",
        elementTarget: "",
        triggers: "2",
        elementUrl: "https:sarin",
      },
    });
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
