import { render, screen } from "@testing-library/react";
import Sidebar from "./sidebar";

it("there should be a value in crd1", async () => {
  render(<Sidebar />);
  const sidebarSection = screen.getByTestId("test1");

  expect(sidebarSection).toBeTruthy();
});

it("there should be a values in crd2", async () => {
  render(<Sidebar />);
  const sidebarSection = screen.getByTestId("test2");

  expect(sidebarSection).toBeTruthy();
});

it("there should be a value3 in crd1", async () => {
  render(<Sidebar />);
  const sidebarSection = screen.getByTestId("test3");

  expect(sidebarSection).toBeTruthy();
});
