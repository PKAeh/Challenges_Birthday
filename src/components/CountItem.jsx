import React from "react";

const CountItem = ({ title, count }) => {
  return (
    <div>
      <div>{count}</div>
      <div>{title}</div>
    </div>
  );
};

export default CountItem;
