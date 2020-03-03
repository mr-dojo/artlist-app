import React from "react";

export default class ErrorCheck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError === true) {
      return (
        <div className="section-error">
          <h2 className="error-message">Could not display this section.</h2>
        </div>
      );
    }
    return this.props.children;
  }
}
