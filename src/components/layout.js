import React from "react";
import Container from "./container";
import Navbar from "./navbar";

class Template extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <Container>
        <Navbar />
        {children}
      </Container>
    );
  }
}

export default Template;
