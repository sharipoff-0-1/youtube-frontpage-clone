import styled from "styled-components";
import { ReactComponent as burger } from "./assets/icons/guide.svg";
import { ReactComponent as search } from "./assets/icons/search.svg";
import { ReactComponent as camera } from "./assets/icons/camera.svg";
import { ReactComponent as menu } from "./assets/icons/menu.svg";
import { ReactComponent as bell } from "./assets/icons/bell.svg";

export const Container = styled("div")`
  display: flex;
  flex-direction: ${({ flex }) => !flex && "column"};
  min-height: 100vh;
  background-color: #212121;
  color: #fff;
  padding: ${({ flex }) => !flex && "0 30px"};
`;

export const Navbar = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 12px 0;
`;

export const NavbarItem = styled.div`
  display: flex;
  align-items: center;
`;

export const Icons = styled.div``;

Icons.Burger = styled(burger)`
  width: 24px;
  height: 24px;
  margin-right: 1rem;
`;
Icons.Camera = styled(camera)`
  width: 24px;
  height: 24px;
  margin-right: 20px;
`;
Icons.Menu = styled(menu)`
  width: 24px;
  height: 24px;
  margin-right: 20px;
`;
Icons.Bell = styled(bell)`
  width: 24px;
  height: 24px;
  margin-right: 20px;
`;

Icons.Search = styled(search)`
  width: 24px;
  height: 24px;
`;

Icons.Logo = styled.img``;
Icons.User = styled.img``;

export const Input = styled.input`
  width: 640px;
  height: 35px;
  background: #000000;
  color: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 2px 0px 0px 2px;
  padding: 5px;
  :focus {
    outline: none;
  }
`;

export const Button = styled.button`
  width: 65px;
  height: 35px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0px 2px 2px 0px;
  border: none;
`;
