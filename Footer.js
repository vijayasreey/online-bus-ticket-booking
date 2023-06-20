import React from "react";

const footerHeight = 300;
const footerEltMarginTop = 15;

const div1Style = {
  width: "100vw",
  height: `${footerHeight + footerEltMarginTop}px`,
  backgroundColor: "black",
  position: "absolute",
};

const div2Style = {
  width: "100%",
  position: "absolute",
  color: "white",
  height: `${footerHeight}px`,
  marginTop: `${footerEltMarginTop}px`,
};


export default function Footer() {
  return (
    <div style={{width: "100%"}}>
      <div style={div1Style}></div>
      <div style={div2Style}>
        <div>footer content</div>
      </div>
    </div>
  );
}