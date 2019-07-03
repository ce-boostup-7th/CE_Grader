import React from "react";
import { shallow, mount, render } from "enzyme";

import Login from "./index";

describe("Login", () => {
  it("should render ", () => {
    const component = shallow(<Login />);
    expect(component).toMatchSnapshot();
  });

  it("should mount", () => {
    const component = mount(<Login />);
    expect(component).toMatchSnapshot();
  });

  it("should render", () => {
    const component = render(<Login />);
    expect(component).toMatchSnapshot();
  });
});
