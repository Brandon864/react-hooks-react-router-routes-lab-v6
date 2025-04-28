import "@testing-library/jest-dom";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { routes } from "../routes"; // Import the route array, not the router object

test('renders the Home component on route "/"', () => {
  const router = createMemoryRouter(routes, {
    initialEntries: ["/"],
    initialIndex: 0,
  });
  render(<RouterProvider router={router} />);
  expect(screen.getByText(/Home Page/)).toBeInTheDocument();
});

test('renders the Actors component on route "/actors"', () => {
  const router = createMemoryRouter(routes, {
    initialEntries: ["/actors"],
    initialIndex: 0,
  });
  render(<RouterProvider router={router} />);
  expect(screen.getByText(/Actors Page/)).toBeInTheDocument();
});

test('renders the Directors component on route "/directors"', () => {
  const router = createMemoryRouter(routes, {
    initialEntries: ["/directors"],
    initialIndex: 0,
  });
  render(<RouterProvider router={router} />);
  expect(screen.getByText(/Directors Page/)).toBeInTheDocument();
});

test('renders the Movie component on route "/movie/:id"', async () => {
  const id = 1;
  const router = createMemoryRouter(routes, {
    initialEntries: [`/movie/${id}`],
    initialIndex: 0,
  });
  render(<RouterProvider router={router} />);
  expect(await screen.findByText(/Doctor Strange/)).toBeInTheDocument();
});

test("renders an error page when given a bad URL", () => {
  const router = createMemoryRouter(routes, {
    initialEntries: ["/bad-route"],
    initialIndex: 0,
  });
  render(<RouterProvider router={router} />);
  expect(screen.getByText(/Oops! Looks like something went wrong./)).toBeInTheDocument();
});