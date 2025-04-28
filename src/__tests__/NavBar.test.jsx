import "@testing-library/jest-dom";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBar from "../components/NavBar";

let container;

beforeEach(() => {
  container = render(
    <MemoryRouter initialEntries={["/"]}>
      <NavBar />
    </MemoryRouter>
  ).container;
});

test('wraps content in a div with "navbar" class', () => {
  expect(container.querySelector(".navbar")).toBeInTheDocument();
});

test("renders a Home <NavLink>", () => {
  const a = screen.queryByText(/Home/);
  expect(a).toBeInTheDocument();
  expect(a.tagName).toBe("A");
  expect(a.href).toContain("/"); // Home link should point to "/"

  fireEvent.click(a, { button: 0 });
  expect(a.classList).toContain("active");
});

test("renders a Actors <NavLink>", () => {
  const a = screen.queryByText(/Actors/);
  expect(a).toBeInTheDocument();
  expect(a.tagName).toBe("A");
  expect(a.href).toContain("/actors"); // Actors link should point to "/actors"

  // Simulate navigation to /actors to activate the link
  const { container: newContainer } = render(
    <MemoryRouter initialEntries={["/actors"]}>
      <NavBar />
    </MemoryRouter>
  );
  const activeLink = newContainer.querySelector("a[href='/actors']");
  expect(activeLink.classList).toContain("active");
});

test("renders a Directors <NavLink>", () => {
  const a = screen.queryByText(/Directors/);
  expect(a).toBeInTheDocument();
  expect(a.tagName).toBe("A");
  expect(a.href).toContain("/directors"); // Directors link should point to "/directors"

  // Simulate navigation to /directors to activate the link
  const { container: newContainer } = render(
    <MemoryRouter initialEntries={["/directors"]}>
      <NavBar />
    </MemoryRouter>
  );
  const activeLink = newContainer.querySelector("a[href='/directors']");
  expect(activeLink.classList).toContain("active");
});