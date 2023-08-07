import { useState } from "react";
import ReactDOM from 'react-dom/client';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function OpenManifestForm({arg}) {
  const [model, setModel] = useState(arg);

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(`The id you entered was: ${model.id}`);
  }

  return (
  <Form className="d-flex" onSubmit={handleSubmit}>
                <Form.Control
                  type="text"
                  placeholder="BSB Nummer"
                  className="me-2"
                  value={model.id}
                  onChange={(e) => setModel({ id:e.target.value, manifest:"333333"})}
                />
                <Button variant="outline-success" type="submit">Open {model.id}</Button>
              </Form>
  )
}

export default OpenManifestForm;

