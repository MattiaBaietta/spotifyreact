import { Col,Row } from "react-bootstrap"
import { Link } from "react-router-dom"



export function Navtop(){
    return(
        <Row>
        <Col className="col-9 col-lg-11 mainLinks d-none   d-md-flex">
          <Link to="/trending">TRENDING</Link>
          <Link to="/podcast">PODCAST</Link>
          <Link to="/moods">MOODS AND GENRES</Link>
          <Link to="/new">NEW RELEASES</Link>
          <Link to="/discover">DISCOVER</Link>
        </Col>

        {/* vanno messi in una navbar */}

      </Row>
    )
}