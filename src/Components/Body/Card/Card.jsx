import React, { Component } from "react";
import { Container, Video, User, Wrapper, Title, Author } from "./card.styled";

export default class Card extends Component {
  render() {
    const { user, title, video, name, view, time } = this.props.value;
    return (
      <Container>
        <Video src={video} alt={"video content"} />
        <Wrapper>
          <User src={user.img} />
          <div>
            <Title>{title}</Title>
            <Author desc> {user.name}</Author>
            <div style={{ display: "flex" }}>
              {view} {time}
            </div>
          </div>
        </Wrapper>
      </Container>
    );
  }
}
