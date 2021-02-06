/** Global styles */
import "./assets/styles/index.scss";

/** Views */
import { MainView } from "./views/Main/Main.js";

/** Components */
import { ErrorBoundary } from "./components/ErrorBoundary/ErrorBoundary.js";

function App() {
  return (
    <div className="App">
      <h1>Initial scaffold</h1>
      <ErrorBoundary>
        <MainView />
      </ErrorBoundary>
    </div>
  );
}

export default App;
