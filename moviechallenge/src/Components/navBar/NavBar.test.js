import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NavBar from "./NavBar";
import { texts } from "../utils/assistant";

test("render the welcome navbar ", () => {
  const component = render(<NavBar login={false}/>);
  component.getByText(texts.Title)
});
