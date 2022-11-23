import styled from "styled-components";
import { COLORS } from "../constants";

export const Container = styled.div`
  display: flex;
  width: 80vw;
  height: 80vh;
  background-color: ${COLORS.navigationYellow};
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10vh 10vw;
`;

export const NavigationContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const NavigationItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 24px;
  &:last-child {
    margin-right: 0;
  }
`;

export const NavigationTitle = styled.span`
  font-size: 18px;
  font-weight: 700;
`;

export const NavigationImage = styled.img`
  margin-top: 24px;
`;

export const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ResumeTitle = styled.h2``;

export const ResumeDownload = styled.a`
  margin-top: 24px;
  padding: 12px;
  display: flex;
  background-color: black;
  border-radius: 12px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  color: white;
`;
