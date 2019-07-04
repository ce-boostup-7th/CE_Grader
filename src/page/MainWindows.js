import React from "react";

import { StateContext } from "../StateProvider/StateProvider";
import { LOGOUT } from "../StateProvider/actions_constant";

import Login from "../components/Login";
import SideNav from "../components/SideNav";
const MainWindows = props => {
  let { state, dispatch } = React.useContext(StateContext);
  return (
    <div>
      {state.isLogin ? (
        //  <button onClick={
        //     e => dispatch({
        //         type: LOGOUT
        //     })
        // }>Log out</button>
        <SideNav />
      ) : (
        <Login />
      )}
    </div>
  );
};
export default MainWindows;
