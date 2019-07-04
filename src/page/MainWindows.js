import React from "react";

import { StateContext } from "../StateProvider/StateProvider";

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
