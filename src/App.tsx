import styles from "./App.module.css";
import Board from "./components/board/Board";
import Control from "./components/control/Control";

function App() {
  return (
    <div className={styles.wrapper}>
      <h1>Game of Life</h1>
      <Control />
      <Board />
    </div>
  );
}

export default App;
