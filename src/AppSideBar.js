import { useState, useContext } from "react";

import Nav from 'react-bootstrap/Nav';

import {ModelContext} from "./App";

function AppSideBar() {
    const [model, setModel] = useContext(ModelContext);

  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <h1>Manifest: {model.id}</h1>
      <Nav.Link href="/home">Active</Nav.Link>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav>
  );
}

export default AppSideBar;