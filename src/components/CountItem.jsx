import React from "react";

const CountItem = ({ title, count }) => {
  return (
    <div
      style={{
        backgroundColor: "#78b3f5",
        borderRadius: "13px",
        marginTop: "30px",
        width: "160px",
        boxShadow: "rgba(161, 201, 246, 0.5) -18px -18px 0px",
      }}
    >
      <div
        style={{
          height: "120px",
          fontSize: "2.5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bold",
          color: "#f6ffff",
        }}
      >
        {count}
      </div>
      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "0 0 13px 13px",
          height: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "1.1rem",
          color: "#6b6b6d",
        }}
      >
        {title}
      </div>
    </div>
  );
};

export default CountItem;
