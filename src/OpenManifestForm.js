import { useState, useContext } from "react";
import ReactDOM from "react-dom/client";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { ManifestContext } from "./App";

function OpenManifestForm() {
  const [manifest, setManifest] = useContext(ManifestContext);
  const [localid, setLocalId] = useState("bsb11251816");

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(
      `https://api.digitale-sammlungen.de/iiif/presentation/v2/${localid}/manifest`
    )
      .then((response) => response.json())
      .then((data) => {
        setManifest(data);
      });
  };

  return (
    <Form className="d-flex" onSubmit={handleSubmit}>
      <Form.Control
        type="text"
        placeholder="BSB Nummer"
        className="me-2"
        value={localid}
        onChange={(e) => {
          setLocalId(e.target.value);
        }}
      />
      <Button variant="outline-success" type="submit">
        Open
      </Button>
    </Form>
  );
}

export default OpenManifestForm;
