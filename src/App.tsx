import styles from "./App.module.scss";
import Board from "./components/board/Board";
import Control from "./components/control/Control";
import SizeEditor from "./components/size-editor/SizeEditor";

function App() {
  return (
    <div className={styles.wrapper}>
      <h1>Game of Life</h1>
      <Control />
      <SizeEditor />
      <Board />
    </div>
  );
}

export default App;
