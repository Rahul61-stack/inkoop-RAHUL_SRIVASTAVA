import { useState } from "react";

function File() {
  const [text, setText] = useState(""); //RAHUL SRIVASTAVA
  function convertText(e) {
    let value = e.split("");
    let finalText = "";
    let bool = true;
    for (let i = 0; i < value.length; i++) {
      if (bool) {
        value[i] = value[i].toUpperCase();
      } else {
        value[i] = value[i].toLowerCase();
      }
      if (value[i] == " ") {
        continue;
      } else {
        bool = !bool;
      }
    }
    finalText = value.join("");
    return finalText;
  }
  function countAndSort(text) {
    // rahul srivastava
    let obj = {};
    let arr = text.split("");
    for (let i = 0; i < text.length; i++) {
      console.log(obj[arr[i]]);
      if (arr[i] == " ") continue;
      if (obj[text[i]] == undefined) {
        obj = { ...obj, [text[i].toLowerCase()]: 1 };
      } else {
        obj = { ...obj, [text[i].toLowerCase()]: obj[text[i]] + 1 };
      }
    }
    const sortedObj = Object.entries(obj)
      .sort(([, a], [, b]) => a - b).reverse()
      .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});
      
    return sortedObj
  }
  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <div>{convertText(text)}</div>
      {Object.entries(countAndSort(text)).map((value,i)=>{
        return(
            <div key = {i} >
                <p>{value[0] + " : " + value[1]}</p>
            </div>
        )
      })}
    </div>
  );
}

export default File;
