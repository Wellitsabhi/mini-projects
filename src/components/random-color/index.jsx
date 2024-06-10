import React, { useEffect, useState } from "react";

function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function RandomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[RandomColorUtility(hex.length)];
    }
    setColor(hexColor);
    // console.log(hexColor);
  }

  function copyColor(){
    navigator.clipboard.writeText(color);
    alert("Color copied");
  }

  useEffect(() => {
    if(typeOfColor === 'rgb') handleCreateRandomRgbColor();
    else  handleCreateRandomHexColor();
  }, [typeOfColor])
  

  function handleCreateRandomRgbColor() {
    const r = RandomColorUtility(256);
    const g = RandomColorUtility(256);
    const b = RandomColorUtility(256);

    setColor(`rgb(${r},${g},${b})`);
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
        
      }}
    >
      <button
        onClick={() => {
          setTypeOfColor("hex");
        }}
      >
        Create HEX color
      </button>
      <button
        onClick={() => {
          setTypeOfColor("rgb");
        }}
      >
        Create RGB color
      </button>
      <button
        onClick={() => {
          typeOfColor === "hex"
            ? handleCreateRandomHexColor()
            : handleCreateRandomRgbColor();
        }}
      >
        Generate random color
      </button>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: '5px',
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "20px",
          marginTop: "40px",
        }}
      >
        <h3>{typeOfColor === 'rgb'? 'RGB' :'HEX'}</h3>
        <h1 onClick={()=>{copyColor()}}  style={{
          borderWidth: '0.1px',
          borderColor: "white",
          borderStyle: 'solid', 
          borderRadius:'15px',
          cursor: 'pointer',
          padding: '9px 6px'
        }} >{color}</h1>
      </div>
    </div>
  );
}

export default RandomColor;
