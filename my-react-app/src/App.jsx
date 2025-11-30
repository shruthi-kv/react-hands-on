import StarRating from "./Practice/Star";
import { useState } from "react";
import Rating from "./Practice/Rating";
import Count from "./Practice/count";
import StopWatch from "./Practice/StopWatch";
import ToggleFax from "./Practice/ToggleFaq";
import Toggle from "./Practice/Toggle";
import ToDo from "./Practice/ToDo";
import Password from "./Practice/Password";
import Checkbox1 from "./Practice/Checkbox1";

const App = () => {
  const [rating, setRating] = useState(0);
  const styles = {
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
      gap: "20px",
      padding: "20px",
    },
    card: {
      padding: "20px",
      border: "1px solid #ddd",
      borderRadius: "10px",
      background: "#fafafa",
    },
  };
  return (
    <div style={styles.grid}>
      <div style={styles.card}>
        <ToDo />
      </div>

      <div style={styles.card}>
        <Checkbox1 />
      </div>
      <div style={styles.card}>
        <StopWatch />
      </div>
      <div style={styles.card}>
        <ToggleFax />
      </div>
      <div style={styles.card}>
        <Password />
      </div>
      <div style={styles.card}>
        <Rating />
      </div>
      <div style={styles.card}>
        <Count />
      </div>

      <div style={styles.card}>
        <Toggle />
      </div>
    </div>
  );
};

export default App;
