import "./styles.css";

import _ from "lodash";

export default function App() {
  const x = "20";
  const y = "5";

  //y = k - a.2x
  const k = parseInt(y) + 0.2 * parseInt(x);

  function findBladderPower(k) {
    if (!k) return;

    if (k >= 0 && k <= 10) {
      return "Very weak (A)";
    }

    if (k > 10 && k <= 15) {
      return "Weak - (B)";
    }

    if (k > 15 && k <= 20) {
      return "Weak + (C)";
    }

    if (k > 20 && k <= 25) {
      return "Normal - (D)";
    }

    if (k > 25 && k <= 31) {
      return "Normal + (E)";
    }

    return "Strong (F)";
  }

  const bladderPower = findBladderPower(k);

  return (
    <div className="App">
      <div>
        <div style={{ display: "flex" }}>
          <h1>
            <span role="img" aria-label="search">
              🔍
            </span>
            Bladder Power
          </h1>
        </div>
        <div style={{ display: "flex" }}>
          <h2 style={{ marginRight: 50 }}>{`X: ${x}`}</h2>
          <h2>{`Y: ${y}`}</h2>
        </div>
        <div style={{ display: "flex" }}>
          <h2>{k}</h2>
        </div>
        <div style={{ display: "flex" }}>
          <h2>Bladder power: {bladderPower}</h2>
        </div>
      </div>
      <hr />
      <div style={{ display: "flex" }}>
        <img src="https://i.ibb.co/W67pKTt/saber-weak.png" alt="" />
      </div>
    </div>
  );
}
