import { ReactComponent as home } from "../../assets/icons/home.svg";
import styled from "styled-components";

const Icons = styled.div``;

Icons.Home = styled(home)`
  width: 18px;
  height: 18px;
  margin-right: 24px;
`;

export const SidebarData = [
  {
    id: 1,
    title: "",
    data: [
      { id: 1, title: "Home", icon: Icons.Home },
      { id: 2, title: "Explore", icon: Icons.Home },
      { id: 3, title: "Shorts", icon: Icons.Home },
      { id: 4, title: "Subscriptions", icon: Icons.Home },
    ],
  },

  {
    id: 2,
    title: "",
    data: [
      { id: 1, title: "Library", icon: Icons.Home },
      { id: 2, title: "History", icon: Icons.Home },
      { id: 3, title: "Your videos", icon: Icons.Home },
      { id: 4, title: "Watch later", icon: Icons.Home },
      { id: 5, title: "Liked videos", icon: Icons.Home },
    ],
  },
  {
    id: 3,
    title: "Subscriptions",
    data: [
      { id: 1, title: "Library", icon: Icons.Home },
      { id: 2, title: "History", icon: Icons.Home },
      { id: 3, title: "Your videos", icon: Icons.Home },
      { id: 4, title: "Watch later", icon: Icons.Home },
      { id: 5, title: "Liked videos", icon: Icons.Home },
      { id: 5, title: "Liked videos", icon: Icons.Home },
      { id: 5, title: "Liked videos", icon: Icons.Home },
      { id: 5, title: "Liked videos", icon: Icons.Home },
      { id: 5, title: "Liked videos", icon: Icons.Home },
      { id: 5, title: "Liked videos", icon: Icons.Home },
    ],
  },

  {
    id: 4,
    title: "Explore",
    data: [
      { id: 1, title: "Library", icon: Icons.Home },
      { id: 2, title: "History", icon: Icons.Home },
      { id: 3, title: "Your videos", icon: Icons.Home },
      { id: 4, title: "Watch later", icon: Icons.Home },
    ],
  },

  {
    id: 5,
    title: "More from Youtube",
    data: [
      { id: 1, title: "Library", icon: Icons.Home },
      { id: 2, title: "History", icon: Icons.Home },
      { id: 3, title: "Your videos", icon: Icons.Home },
      { id: 4, title: "Watch later", icon: Icons.Home },
      { id: 5, title: "Liked videos", icon: Icons.Home },
    ],
  },
];
