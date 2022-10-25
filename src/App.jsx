import React, { useEffect, useState } from "react";
import Calendar from "./components/Calendar";

// import "./App.css";

function App() {
  return (
    <div className="container" style={{ backgroundColor: "red" }}>
      <div
        className="row justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="text-center col-md-8">
          <h1 className="mb-3">Countdown to my birthday</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo quas
            obcaecati atque? Aliquam architecto illum, dignissimos, amet
            incidunt at expedita quia, ex error molestiae impedit in est.
            Numquam, soluta dolor.
          </p>
          <Calendar />
        </div>
      </div>
    </div>
  );
}

export default App;
