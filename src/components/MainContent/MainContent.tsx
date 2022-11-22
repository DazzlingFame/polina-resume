import styled from "styled-components";
import React from "react";
import { AmbitionsBlock } from "./components/AmbitionsBlock";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainContent: React.FC = () => (
  <Container>
    <AmbitionsBlock />
  </Container>
);
