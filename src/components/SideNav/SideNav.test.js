import React from "react";
import { shallow, mount, render } from "enzyme";

import SideNav from "./index";

describe("SideNav", () => {
  it("should render ", () => {
    const component = shallow(<SideNav />);
    expect(component.exists()).toBeTruthy();
  });

  it("should mount", () => {
    const component = mount(<SideNav />);
    const wrapper = component.find('ButtonStyled.Spanstyled[children="x"]');
    expect(wrapper.exists());
  });

  it("should render", () => {
    const component = render(<SideNav />);
    expect(component);
  });
});
