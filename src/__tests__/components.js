/* eslint-disable comma-dangle */
import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Calculator from "../components/Calculator";
import Navbar from "../components/Navbar";
// import Quotes from "../components/Quotes";
// import Home from "../components/Home";

describe("Calculator component", () => {
  test("renders without errors", () => {
    render(<Calculator />);
    expect(screen.getByText("AC")).toBeInTheDocument();
  });
});

describe("Navbar component", () => {
  test("renders without errors", () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    expect(screen.getByText("Math Magician")).toBeInTheDocument();
  });
});

// describe("Quotes component", () => {
//   test("renders without errors", () => {
//     render(<Quotes />);
//     expect(screen.getByText("Quote of the day")).toBeInTheDocument();
//   });
// });

// describe("Home component", () => {
//   test("renders without errors", () => {
//     render(<Home />);
//     expect(
//       screen.getByText(
//         "welcome to Math magician, Do some calculations and read some quotes!!!"
//       )
//     ).toBeInTheDocument();
//   });
// });
