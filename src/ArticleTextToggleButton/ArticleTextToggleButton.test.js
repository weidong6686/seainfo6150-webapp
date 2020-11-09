import React from "react";
import ArticleTextToggleButton from "./ArticleTextToggleButton";
import { fireEvent } from "@testing-library/react";

describe("ArticleTextToggleButton tests", () => {

  it("renders correctly", () => {
    const { container, getByText } = render(<ArticleTextToggleButton buttonText={"Test Button"} />);
    const button = getByText("Test Button");
    fireEvent.click(button);
    expect(container).toMatchSnapshot();
  });
  
});