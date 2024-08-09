import { GameContext } from "./context/game-context";
import styles from "./styles/score.module.css";
import { useContext } from "react";

export default function BestScore() {
  const { score } = useContext(GameContext);

  return (
    <div className={styles.score}>
      BEST
      <div>{score}</div>
    </div>
  );
}
        