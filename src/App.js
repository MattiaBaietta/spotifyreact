import { Sidebar } from "./components/Sidebar";
import { Player } from "./components/Player";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from "react-bootstrap";
import { Homepage } from "./components/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Albumpage } from "./components/Albumpage";
import { Navtop } from "./components/Navtop";
import { Artistpage } from "./components/Artistpage";

function App() {
  return (


    <BrowserRouter>
      <>
        <Container fluid>
          <Row >
            <Sidebar />
            <Col className="col-12 col-md-9 offset-md-3 mainPage">
              <Navtop/>
              <Routes>
                <Route path="/" element={
                  <Homepage />
                }>
  
                </Route>
                 <Route path="/album/:id" element={
                  <Albumpage/>
                }>
  
                </Route> 
                <Route path="/artist/:name" element={
                  <Artistpage/>
                }>
  
                </Route> 
  
              </Routes>
  
            </Col>
          </Row>

        </Container>
        <Player />
      </>
    </BrowserRouter>



  );
}

export default App;
