import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Translate } from "./Translate";

test("renders as div", async () => {
    // ARRANGE
    const { container } = render(<Translate>foo</Translate>);

    // ASSERT
    expect(container.querySelector("div")).toHaveTextContent("foo");
});

test("renders as span", async () => {
    // ARRANGE
    const { container } = render(<Translate element="span">foo</Translate>);

    // ASSERT
    expect(container.querySelector("span")).toHaveTextContent("foo");
});

test("renders as anchor", async () => {
    // ARRANGE
    const { container } = render(<Translate element="a">foo</Translate>);

    // ASSERT
    expect(container.querySelector("a")).toHaveTextContent("foo");
});
