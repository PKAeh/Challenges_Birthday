import React, { useEffect, useState } from "react";
import Calendar from "./components/Calendar";

// import "./App.css";

function App() {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to right top,#d16ba5,#c777b9,#ba83ca,#aa8fd8,#9a9ae1,#8aa7ec,#79b3f4,#69bff8,#52cffe,#41dfff,#46eefa,#5ffbf1)",
      }}
    >
      <div className="container">
        <div
          className="row justify-content-center align-items-center"
          style={{ height: "100vh", width: "100%" }}
        >
          <div className="text-center col-md-8">
            <h1
              style={{
                marginBottom: "20px",
                fontWeight: "bold",
                color: "#ffffff",
              }}
            >
              Countdown to my birthday
            </h1>
            <p
              style={{
                color: "#ffffff",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo quas
              obcaecati atque? Aliquam architecto illum, dignissimos, amet
              incidunt at expedita quia, ex error molestiae impedit in est.
              Numquam, soluta dolor.
            </p>
            <Calendar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
