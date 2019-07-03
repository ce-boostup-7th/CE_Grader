import styled, { createGlobalStyle } from "styled-components";
import { Window, WindowHeader, reset, Button } from "react95";
const ResetStyles = createGlobalStyle`
  ${reset}
`;

const WindowStyled = styled(Window)`
  width: 400px;
`;

const WindowHeaderStyled = styled(WindowHeader)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ButtonStyled = styled(Button)`
  margin-right: -6px;
  margin-top: 1px;
`;

const Spanstyled = styled.span`
  font-weight: bold;
  transform: translateY(-1px);
`;

const Div = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export {
  WindowStyled,
  Div,
  ButtonStyled,
  WindowHeaderStyled,
  ResetStyles,
  Spanstyled
};
