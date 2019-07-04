import React from "react";

import styled, { ThemeProvider } from "styled-components";
import { themes, WindowContent } from "react95";
import {
  Div,
  ResetStyles,
  WindowHeaderStyled,
  WindowStyled,
  ButtonStyled,
  Spanstyled
} from "./LoginStyle";
import { StateContext } from "../../StateProvider/StateProvider";
import { LOGIN } from "../../StateProvider/actions_constant";

const WindowContentStyled = styled(WindowContent)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Form = styled.form`
  display: inline-flex;
  flex-direction: column;
`;

export default () => {
  const [onclose, setOnClose] = React.useState(false);
  const { state, dispatch } = React.useContext(StateContext);
  const handleClose = () => {
    setOnClose(true);
  };
  const handleLoggin = () => {
    dispatch({
      type: LOGIN
    });
  };

  React.useEffect(() => {}, [onclose]);
  return (
    <Div className="App">
      <ResetStyles />
      <ThemeProvider theme={themes.default}>
        <WindowStyled>
          <WindowHeaderStyled>
            <span>react95.exe</span>
            <ButtonStyled onClick={handleClose} size={"sm"} square>
              <Spanstyled>x</Spanstyled>
            </ButtonStyled>
          </WindowHeaderStyled>
          <WindowContentStyled>
            <div>ICOn</div>
            <Form>
              <Spanstyled style={{ marginBottom: "3px" }}>
                Login name{" "}
              </Spanstyled>
              <input
                type="text"
                placeholder="USER_NAME"
                style={{ marginBottom: "8px" }}
              />
              <Spanstyled style={{ marginBottom: "3px" }}>Password</Spanstyled>
              <input type="text" placeholder="USER_PASSWORD" />
            </Form>
            <Form>
              <ButtonStyled
                onClick={() => handleLoggin()}
                style={{ marginBottom: "8px" }}
              >
                <Spanstyled>submit</Spanstyled>
              </ButtonStyled>
              <ButtonStyled>
                <Spanstyled>cancle</Spanstyled>
              </ButtonStyled>
            </Form>
          </WindowContentStyled>
        </WindowStyled>
      </ThemeProvider>
    </Div>
  );
};
