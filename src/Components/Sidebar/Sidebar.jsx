import React, { Component } from "react";
import {
  Container,
  Title,
  Subtitle,
  Wrapper,
} from "../../Components/Sidebar/sidebar.styled";
import { SidebarData } from "./sidebar";

export default class Sidebar extends Component {
  render() {
    return (
      <Container>
        {SidebarData.map(({ id, title, data }, index) => (
          <Wrapper key={index}>
            {title && <Title>{title}</Title>}
            {data.map(({ icon: Icon, title: subTitle }, index) => (
              <div key={index} style={{ display: "flex" }}>
                <Icon />
                <Subtitle>{subTitle}</Subtitle>
              </div>
            ))}
          </Wrapper>
        ))}
      </Container>
    );
  }
}
