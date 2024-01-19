import { Container, Col, Row, ProgressBar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faShuffle, faForward, faBackward } from "@fortawesome/free-solid-svg-icons";

import { useSelector } from 'react-redux'
import { useState } from "react";




export function Player() {
  const actualsong = useSelector((state) => state.song.song[0])



  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row>
        <Col className="col-lg-10 ">
          <Row>
            <Col className="col-6 col-md-4 col-lg-2 offset-3 offset-md-4 offset-lg-5  mt-1">
              <Row className=" .playerControls">
                <Col><FontAwesomeIcon className="playerControlsimg" icon={faShuffle} /></Col>
                <Col><FontAwesomeIcon className="playerControlsimg" icon={faBackward} /></Col>
                <Col><FontAwesomeIcon  className="playerControlsimg" icon={faPlay} /></Col>
                <Col> <FontAwesomeIcon className="playerControlsimg" icon={faForward} /></Col>
                
              </Row>
            </Col>
          </Row>
          <Row className="justify-content-center  py-3">
            <div className="col-8 col-md-6 barraprogress">
              <ProgressBar />
            </div>
          </Row>

        </Col>
        <Col className="col-lg-2">
        {actualsong && (
                  <div className="d-flex m-2">
                    
                    <div className="mx-4">
                      <h5 className="" style={{color:"white"}}>{actualsong.title}</h5>
                      <h5 className="" style={{color:"white"}}>{actualsong.artist.name}</h5>
                    </div>
                    <img src={actualsong.album.cover_small} alt="" srcset="" />
                  </div>
                   
)}
        </Col>
        
      </Row>
    </Container>

  )
}


{/* <div class="container-fluid fixed-bottom bg-container pt-1">
        <div class="row">
        <div class="col-lg-10 offset-lg-2">
          <div class="row">
            <div class="col-6 col-md-4 col-lg-2 offset-3 offset-md-4 offset-lg-5 playerControlsdaaggiungere mt-1">
              <div class="row">
                <a href="#">
                  <img src={Shuffle} alt="shuffle" />                </a>
                <a href="#">
                  <img src={Previous} alt="shuffle" />
                </a>
                <a href="#">
                  <img src={Play} alt="shuffle" />
                </a>
                <a href="#">
                  <img src={Next} alt="shuffle" />
                </a>
                <a href="#">
                  <img src={Repeat} alt="shuffle" />
                </a>
              </div>
            </div>
          </div>
          <div class="row justify-content-center playBar py-3">
            <div class="col-8 col-md-6">
              <div class="progress">
                <div  class="progress-bar"role="progressbar"aria-valuenow="0" aria-valuemin="0"aria-valuemax="100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}