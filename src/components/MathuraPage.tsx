import React from "react";
import Title from "@/components/Title";
import Card from "@/components/Card";

function MathuraPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "60px",
        padding: "30px 0px",
      }}
    >
      <Title />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default MathuraPage;
