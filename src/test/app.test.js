import React from "react";
import { cleanup, render } from "@testing-library/react";
import renderer from "react-test-renderer";
import App from "../App";
import { shallow } from "enzyme";
// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.


it("Check App renders using react testing library", () => {
  const { queryByText, getByTestId } = render(<App />);
});

test("Check App renders using enzyme", () => {
  const appWrapper = shallow(<App />);
});

it("renders correctly", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
