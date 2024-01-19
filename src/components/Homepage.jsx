import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSongsAction } from "../redux/action";
import { useEffect, useState } from "react";
import { Song } from "./Song";
import { numRandomartist } from "./Fetchfunctions";
import { fetchmultipla } from "./Fetchfunctions";

let rockArtists = [
  'queen',
  'u2',
   'thepolice',
   'eagles',
   'thedoors',
   'oasis',
   'thewho',
   'bonjovi',
]

let popArtists = [
  'maroon5',
  'coldplay',
  'onerepublic',
  'jamesblunt',
  'katyperry',
  'arianagrande',
]

let hipHopArtists = [
  'eminem',
  'snoopdogg',
  'lilwayne',
  'drake',
  'kanyewest',
]



export function Homepage() {
  const [rock,setrock] = useState([])
  const [pop,setpop] = useState([])
  const [hiphop,setihiphop] = useState([])
  const [loading,setloading] = useState(true)

 
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const [rockData, popData, hiphopData] = await Promise.all([
          fetchmultipla(numRandomartist(rockArtists)),
          fetchmultipla(numRandomartist(popArtists)),
          fetchmultipla(numRandomartist(hipHopArtists)),
        ]);
        
        setrock(rockData);
        setpop(popData);
        setihiphop(hiphopData);
        setloading(false)
      } catch (error) {
        console.error("Errore generale nel recupero dei dati", error);
        setloading(false)
      }
    };
  
    fetchData();
  },[])

  return (
    
      
      <>{loading ? (
        <p>Caricamento...</p>):(
        <>
          <Row>
            <Col className="col-10">
              <div className="titolo">
                <h2>Rock Classics</h2>
                <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
                   {rock &&
                    
                   rock.map((song)=>{
                     let randomNumber = Math.floor(Math.random() * 25) + 1;
                      return(
                     <Song key={song.data[randomNumber].id} song={song.data[randomNumber]}/>)
                   })
                } 
                </Row>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="col-10">
              <div className="titolo">
                <h2>Pop Culture</h2>
                <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
                {pop &&
                    
                    pop.map((song)=>{
                      let randomNumber = Math.floor(Math.random() * 25) + 1;
                       return(
                      <Song key={song.data[randomNumber].id} song={song.data[randomNumber]}/>)
                    })
                  }
                </Row>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="col-10">
              <div className="titolo">
                <h2>Hip Hop</h2>
                <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
                {hiphop &&
                    
                    hiphop.map((song)=>{
                      let randomNumber = Math.floor(Math.random() * 25) + 1;
                       return(
                      <Song key={song.data[randomNumber].id} song={song.data[randomNumber]}/>)
                    })
                 } 
                </Row>
              </div>
            </Col>
          </Row>
        </>)}
      </>
  )
}
