import { useState, useContext } from "react";

import Nav from "react-bootstrap/Nav";
import Accordion from "react-bootstrap/Accordion";

import { ManifestContext } from "./App";

function AppSideBar() {
  const [manifest, setManifest] = useContext(ManifestContext);
  const m = JSON.stringify(manifest);

  return (
    <Accordion>
      {Object.keys(manifest).map((key, i) => {
        return (
          <Accordion.Item key={i} eventKey={i}>
            <Accordion.Header>{key}</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
}

export default AppSideBar;
