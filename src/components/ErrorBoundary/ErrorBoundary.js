import React from "react";

/**
 * ErrorBoundary component is responsible for:
 * 1. Log errors, according to the code challenge statement.
 * 2. Show error message.
 *
 * The component could wrap everything but it is set in the root app level in
 * order to catch every error without scope.
 */
export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
