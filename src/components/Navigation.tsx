import React from "react";
import {
  Container,
  NavigationContainer,
  NavigationTitle,
  ResumeContainer,
  NavigationItem,
  ResumeDownload,
  ResumeTitle,
  NavigationImage,
} from "./NavigationStyles";

export const Navigation: React.FC = () => {
  return (
    <Container>
      <NavigationContainer>
        <NavigationItem>
          <NavigationTitle>Ambitions</NavigationTitle>
          <NavigationImage
            src={
              "https://thumb.tildacdn.com/tild3263-6636-4038-b266-306665376432/-/resize/200x/-/format/webp/11.png"
            }
            alt={"blah"}
          />
        </NavigationItem>
        <NavigationItem>
          <NavigationTitle>Next Block</NavigationTitle>
          <NavigationImage
            src={
              "https://thumb.tildacdn.com/tild3263-6636-4038-b266-306665376432/-/resize/200x/-/format/webp/11.png"
            }
            alt={"blah"}
          />
        </NavigationItem>
      </NavigationContainer>
      <ResumeContainer>
        <ResumeTitle>Принимаю роботы для рассмотрения</ResumeTitle>
        <ResumeDownload href={"http://yandex.ru"}>
          Скачать резюме
        </ResumeDownload>
      </ResumeContainer>
    </Container>
  );
};
