import { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes } from "../routes";

/** Global styles */
import "@/assets/styles/app/index.scss";
import "./App.scss";

/** Components */
import { ErrorBoundary } from "../components/ErrorBoundary/ErrorBoundary.js";

function App() {
  return (
    <ErrorBoundary>
      <section className="App">
        {/** Header */}
        <header className="app__header">
          <h1 className="app__title">Podcaster</h1>
        </header>

        {/** Routes */}
        <Router>
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
        </Router>
      </section>
    </ErrorBoundary>
  );
}

export default App;
