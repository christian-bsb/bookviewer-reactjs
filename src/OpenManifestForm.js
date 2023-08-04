import { useState } from "react";
import ReactDOM from 'react-dom/client';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function OpenManifestForm() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`);
  }

/*
  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  )
  */

  return (
  <Form className="d-flex" onSubmit={handleSubmit}>
                <Form.Control
                  type="text"
                  placeholder="BSB Nummer"
                  className="me-2"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Button variant="outline-success" type="submit">Open</Button>
              </Form>
  )
}

/*
<Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="BSB Nummer"
                className="me-2"
                aria-label="nummer"
              />
              <Button variant="outline-success">Open</Button>
            </Form>
*/

export default OpenManifestForm;

/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);
*/
