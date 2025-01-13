import React, { useState } from 'react'
import './RandomColor.css'

const RandomColor = () => {

  const [bgColor, setBgColor] = useState("#222222");
  const [colorType, setColorType] = useState("HEX");

  const randomColorType = () => {
    let random = Math.floor(Math.random() * 10);
    if(random % 2 === 0) setColorType("RGB");
    else setColorType("HEX");
  }

  const generateRandom = (num) => {
    return Math.floor(Math.random() * num);
  };

  const generateColor = (colorType, color) => {

    if(color){
      setColorType(color);
    }

    if(colorType === "HEX"){
      const words = ["1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
      let color = "#";
      while(color.length < 7 && color.length != 7){
        color+=generateRandom(15);
      }
      setBgColor(color);
    }else{
      const color1 = generateRandom(255);
      const color2 = generateRandom(255);
      const color3 = generateRandom(255);
      setBgColor(`rgb(${color1},${color2},${color3})`);
    }

  }

  return (
    <div
    style={{background: bgColor}}
    className='randomColorDiv'>
      <div className='btnDiv'>
        <button onClick={()=>{ generateColor(colorType, "HEX"); }}>Create HEX</button>
        <button onClick={()=>{ generateColor(colorType, "RGB"); }}>Create RGB</button>
        <button onClick={()=>{ randomColorType(); generateColor(colorType); }}>Create Random Color</button>
      </div>

      <div className='colorsDiv'>
        <div>{colorType} COLOR</div>
        <div>{bgColor}</div>
      </div>

    </div>
  )
}

export default RandomColor