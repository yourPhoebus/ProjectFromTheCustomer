import React from "react";

import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import AppNavbar from "./ui/AppNavbar";

export default function Root() {
  return (
    <Container>
      <AppNavbar />
      <Outlet />
    </Container>
  );
}
