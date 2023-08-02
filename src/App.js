import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import AppHeader from "./AppHeader";
import AppSideBar from "./AppSideBar";
import AppImage from "./image";

function App() {
  return (
    <div>
      <AppHeader />
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
    </div>
  );
}

export default App;
