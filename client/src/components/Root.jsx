import React from "react";

import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "./ui/Navbar";

export default function Root() {
  return (
    <Container>
      <Navbar />
      <Outlet />
    </Container>
  );
}
