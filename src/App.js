import { useState, createContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import AppHeader from "./AppHeader";
import AppSideBar from "./AppSideBar";
import AppImage from "./image";

export const ModelContext = createContext();
export const ManifestContext = createContext();

function App() {
    const [model, setModel] = useState({id: "111", manifest:"222"});
    const [manifest, setManifest] = useState();


  return (
    <div>
      <ModelContext.Provider value={[model, setModel]}>
       <ManifestContext.Provider value={[manifest, setManifest]}>
      <AppHeader/>
      <Container>
        <Row>
          <Col>
            <AppSideBar />
          </Col>
          <Col xs={10}>
            <AppImage />
          </Col>
        </Row>
      </Container>
      </ManifestContext.Provider>
      </ModelContext.Provider>
    </div>
  );
}

export default App;
