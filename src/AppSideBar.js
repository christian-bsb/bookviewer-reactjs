import { useState, useContext } from "react";

import Nav from 'react-bootstrap/Nav';

import {ManifestContext} from "./App";

function AppSideBar() {
  const [manifest, setManifest] = useContext(ManifestContext);
  const m = JSON.stringify(manifest);
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
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