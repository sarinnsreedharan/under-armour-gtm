import { useState } from "react"

export default function Armour() {

    const[textValue,setTextValue]=useState('');
    const[buttonClicked,setButtonClicked]=useState(false);
    const armourButtonClicked=()=>{
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: 'pageView',
            page_path: '/new-page-url',  // Custom URL path
            page_title: 'New Page Title'  // Custom page title
          });
        setButtonClicked(!buttonClicked)
    }

    return(
        <>
        <input type="text" value={textValue}  onChange={(e)=>{setTextValue(e.target.value)}}/>
        <button onClick={armourButtonClicked}>Click me!</button>
        {buttonClicked && <><h2>The word you have entered is:</h2><span>{textValue}</span></>}
        </>
    )
}