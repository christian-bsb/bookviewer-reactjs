import { useState, useContext } from "react";

import Nav from 'react-bootstrap/Nav';

import {ModelContext} from "./App";

function AppSideBar() {
    const [model, setModel] = useContext(ModelContext);
    console.log(model);
    const m = "XXman: " + JSON.stringify(model.manifest);
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <h1>Id: {model.id}</h1>
      <div>manifest {m}</div>
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