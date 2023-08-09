import { useState, useContext } from "react";

import Nav from "react-bootstrap/Nav";
import Accordion from "react-bootstrap/Accordion";

import ManifestItem from "./ManifestItem"
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
              <ManifestItem compkey={key} />
            </Accordion.Body>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
}

export default AppSideBar;
