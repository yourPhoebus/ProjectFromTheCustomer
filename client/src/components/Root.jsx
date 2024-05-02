import React from "react";

import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "./ui/Navbar";

export default function Root({ user, logoutHandler }) {
  return (
    <Container>
      <Navbar user={user} logoutHandler={logoutHandler} />
      <Outlet />
    </Container>
  );
}
