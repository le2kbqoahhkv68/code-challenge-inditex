import { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes } from "../routes";

/** Global styles */
import "@/assets/styles/app/index.scss";

/** Components */
import { ErrorBoundary } from "../components/ErrorBoundary/ErrorBoundary.js";

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <section className="App">
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              {routes.map((route) => (
                <Route
                  key={route.name}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              ))}
            </Switch>
          </Suspense>
        </section>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
