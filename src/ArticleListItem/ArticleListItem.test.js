import React from "react";
import ArticleListItem from "./ArticleListItem";
import { fireEvent } from "@testing-library/react";

describe("ArticleListItem tests", () => {

  it("renders correctly", () => {
    const article = {
        "title": "Test title", 
        "displayDate": "Test displayDate", 
        "shortText": "Test shortText content"
    };
    const { container } = render(<ArticleListItem article={article}/>);
    expect(container).toMatchSnapshot();
  });
  
});