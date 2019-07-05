import React from "react";

import { StateContext } from "../StateProvider/StateProvider";

import Login from "../components/Login";
import SideNav from "../components/SideNav";
const MainWindows = props => {
  let { state, dispatch } = React.useContext(StateContext);
  state.isLogin = true;
  return <div>{state.isLogin ? <SideNav /> : <Login />}</div>;
};
export default MainWindows;
