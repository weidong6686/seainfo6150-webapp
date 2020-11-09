import React from "react";
import ArticleList from "./ArticleList";
import { fireEvent } from "@testing-library/react";

describe("ArticleList tests", () => {

  it("renders correctly", () => {
    const articles = [{
        "title": "Test title", 
        "displayDate": "Test displayDate", 
        "shortText": "Test shortText content"
    }];
    const { container } = render(<ArticleList articles={articles}/>);
    expect(container).toMatchSnapshot();
  });

});