import React from "react";
import "./App.css";
import styled from "styled-components";
import { Navigation } from "./components/Navigation";
import { MainContent } from "./components/MainContent/MainContent";

const RootContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  min-width: 375px;
  overflow: scroll;
`;

function App() {
  return (
    <RootContainer>
      <Navigation />
      <MainContent />
    </RootContainer>
  );
}

export default App;
