import { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes } from "../routes";

/** Global styles */
import "@/assets/styles/index.scss";

/** Components */
import { ErrorBoundary } from "../components/ErrorBoundary/ErrorBoundary.js";

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="App">
          <h1>App!</h1>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              ))}
            </Switch>
          </Suspense>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
