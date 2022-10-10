import React, { Component } from "react";
import { Container } from "../../Components/Body/body.styled";
import Card from "../Body/Card/Card";

export default class Body extends Component {
  render() {
    const { data } = this.props;
    return (
      <Container>
        {data.map((value, index) => (
          <Card key={index} value={value} />
        ))}
      </Container>
    );
  }
}
