import React from "react";

import { ThemeProvider } from "styled-components";
import { themes } from "react95";
import {
  Div,
  ResetStyles,
  WindowHeaderStyled,
  WindowStyled,
  ButtonStyled,
  spanStyled
} from "./LoginStyle";
export default () => {
  return (
    <Div className="App">
      <ResetStyles />
      <ThemeProvider theme={themes.default}>
        <WindowStyled>
          <WindowHeaderStyled>
            <span>react95.exe</span>
            <ButtonStyled size={"sm"} square>
              <spanStyled
                style={{ fontWeight: "bold", transform: "translateY(-1px)" }}
              >
                x
              </spanStyled>
            </ButtonStyled>
          </WindowHeaderStyled>
        </WindowStyled>
      </ThemeProvider>
    </Div>
  );
};
