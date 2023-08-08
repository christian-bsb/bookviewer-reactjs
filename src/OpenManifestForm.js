import { useState, useContext } from "react";
import ReactDOM from 'react-dom/client';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import {ModelContext} from "./App";


function OpenManifestForm() {
  const [model, setModel] = useContext(ModelContext);
  const [localid, setLocalId] = useState("bsb");


  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`https://api.digitale-sammlungen.de/iiif/presentation/v2/${model.id}/manifest`)
      .then(response => response.json())
      .then(data => {
        model.manifest = data;
        setModel({ id:model.id, manifest:data});
        console.log(data);
      });
    alert(`The id you entered was: ${model.id}`);
  }
  
  /*
  const handleSubmit = async(event) => {
      event.preventDefault();
      const json = await fetch(`https://api.digitale-sammlungen.de/iiif/presentation/v2/${model.id}/manifest`)
                           .then(response => response.json());
      model.manifest = json;
      setModel(model);
      console.log(model);
      alert(`The id you entered was: ${model.manifest}`);
    }
    */

  return (
  <Form className="d-flex" onSubmit={handleSubmit}>
                <Form.Control
                  type="text"
                  placeholder="BSB Nummer"
                  className="me-2"
                  value={localid}
                  onChange={(e) => {
                  model.id =e.target.value;
                  setLocalId(e.target.value);
                  }
                  }
                />
                <Button variant="outline-success" type="submit">Open {model.id}</Button>
              </Form>
  )
}

export default OpenManifestForm;

