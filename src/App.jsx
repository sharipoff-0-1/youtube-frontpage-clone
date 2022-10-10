import React, { Component } from "react";
import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import Body from "./Components/Body/Body.jsx";
import { Container, Navbar, NavbarItem, Icons, Input, Button } from "./style";
import logo from "./assets/icons/logo.svg";
import user from "./assets/img/pp.png";
import { data } from "./Components/Body/Card/cardData";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
    };
  }
  render() {
    const onFilter = (e) => {
      let res = data.filter((value) =>
        value.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      this.setState({ data: res });
    };
    return (
      <Container>
        <Navbar>
          <NavbarItem>
            <Icons.Burger />
            <Icons.Logo src={logo} alt="logo" />
          </NavbarItem>
          <NavbarItem>
            <Input placeholder="Search" onChange={onFilter} />
            <Button>
              <Icons.Search />
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Icons.Camera />
            <Icons.Menu />
            <Icons.Bell />
            <Icons.User src={user} alt="user-img" />
          </NavbarItem>
        </Navbar>

        <Container flex>
          <Sidebar />
          <Body data={this.state.data} />
        </Container>
      </Container>
    );
  }
}
