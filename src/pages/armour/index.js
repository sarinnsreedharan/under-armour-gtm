import { useState } from "react"

export default function Armour() {

    const[textValue,setTextValue]=useState('');
    const[buttonClicked,setButtonClicked]=useState(false);

    return(
        <>
        <input type="text" value={textValue}  onChange={(e)=>{setTextValue(e.target.value)}}/>
        <button onClick={()=>setButtonClicked(!buttonClicked)}>Click me!</button>
        {buttonClicked && <><h2>The word you have entered is:</h2><span>{textValue}</span></>}
        </>
    )
}