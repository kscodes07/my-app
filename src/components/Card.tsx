import React from "react";
import Description from "./Description";
import Picture from "./Picture";

function Card() {
  return (
    <div
      style={{
        padding: "20px 50px",
        border: "2px solid yellow",
        borderRadius: "16px",
        display: "flex",
        flexDirection: "row",
        gap: "30px",
        maxWidth: "600px",
        minWidth: "500px",
      }}
    >
      <Picture />
      <Description />
    </div>
  );
}

export default Card;
