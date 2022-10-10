import styled from "styled-components";

export const Container = styled("div")`
  height: 100vh;
  width: 300px;
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  overflow-y: auto;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 18px;
  line-height: 16px;
  color: ${({ title }) => (title ? "rgba(255, 255, 255, 0.6)" : "#fff")};
  text-transform: uppercase;
  padding-top: 0.5rem;
  padding-bottom: 1rem;
`;

export const Subtitle = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  color: #ffffff;
  height: 40px;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  margin: 5px 0;
  z-index: 5;
`;
