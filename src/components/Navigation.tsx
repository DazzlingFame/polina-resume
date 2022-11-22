import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: yellow;
  flex-direction: column;
  align-items: center;
    padding: 24px;
`;

const NavigationContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const NavigationItem = styled.div`
    margin-right: 24px;
    &:last-child {
        margin-right: 0;
    }
`;

const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Navigation: React.FC = () => {
  return (
    <Container>
      <NavigationContainer>
        <NavigationItem>Амбиции</NavigationItem>
        <NavigationItem>Бла</NavigationItem>
        <NavigationItem>Бла</NavigationItem>
        <NavigationItem>Бла</NavigationItem>
        <NavigationItem>Бла</NavigationItem>
      </NavigationContainer>
      <ResumeContainer>
        Скачайте меня
        <a href={"yandex.ru"}>Качать</a>
      </ResumeContainer>
    </Container>
  );
};
