import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";

// going to use fullDom ('mount') instead of shallow for practice
// otherwise should have used shallow
// when using mount, have to do some clean up so other tests wont impact each other

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  // unmout component from that JSDom structure
  wrapped.unmount();
});

it("has a text area and a button", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});
