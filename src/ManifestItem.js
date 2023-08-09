import { useState, useContext } from "react";

import ListGroup from 'react-bootstrap/ListGroup';

import { ManifestContext } from "./App";

function ManifestItem(props) {
  const [manifest, setManifest] = useContext(ManifestContext);
  const compkey = props.compkey;
  console.log("key: " + compkey);
  return (
    <ListGroup>
    {Object.keys(manifest[compkey]).map((key, i) => {
            return (<ListGroup.Item key={i} eventKey={i}>{key}</ListGroup.Item>);
          })}
        </ListGroup>
  );

}

export default ManifestItem;