import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bg};
`;

export const Title = styled.Text`
  font-size: ${(props) => props.theme.tm};
  color: ${(props) => props.theme.color};
  font-weight: bold;
`;

export const SubTitle = styled.Text`
  font-size: 20px;
  color: red;
`;
