import React from "react";

import styled from "styled-components";

const Div = styled.div`
  background-color: teal;
`;

const ExtraDiv = styled(Div)`
  background-color: red;
  font-size: 30px;
`;

export default () => {
  return (
    <div>
      This is div
      <Div>This is Div with styled</Div>
      <ExtraDiv>This is Extra Div styled</ExtraDiv>
    </div>
  );
};
