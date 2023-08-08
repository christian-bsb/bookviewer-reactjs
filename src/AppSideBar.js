import { useState, useContext } from "react";

import Nav from "react-bootstrap/Nav";

import { ManifestContext } from "./App";

function AppSideBar() {
  const [manifest, setManifest] = useContext(ManifestContext);
  const m = JSON.stringify(manifest);

  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <h3>manifest</h3>
      <div>
        {Object.keys(manifest).map((data) => {
          return <Nav.Link eventKey="link-2">{data}</Nav.Link>;
        })}
      </div>
    </Nav>
  );
}

export default AppSideBar;
