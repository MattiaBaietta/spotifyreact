
import { useParams } from "react-router-dom"
import { fetchSingola } from "./Fetchfunctions"
import { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import { Songalbum } from "./Songalbum"

export function Artistpage() {
    const param = useParams()
    
    const [artist, setartist] = useState(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArtist = async () => {
            try {
                const results = await fetchSingola("search?q=", param.name)
                setartist(results)
                console.log(results)
                setLoading(false)
            } catch (e) {
                console.log(e)
                setLoading(false)
            }

        }
        fetchArtist()
    }, [param.name])

   


   

    return (
        
         <>{loading ? (
             
             <p>Caricamento...</p>):(
             <Row>
                
                 <Col className="col-md-3 pt-5 text-center" id="img-container">
                     {artist.data[0] && <>
                         <img src={artist.data[0].artist.picture_medium} className="card-img img-fluid" alt="Album" />
                             
                             <div className="text-center">
                               <p className="artist-name">{artist.data[0].artist.name}</p>
                             </div>
                          <div className="mt-4 text-center">
                               <button id="btnPlay" className="btn btn-success" type="button">Play</button>
                            </div></>}
                            
             </Col>
                <Col className="col-md-8 p-5">
                             <Row >
                                 <Col className="col-md-10 mb-5" id="tracklist">
                                      {artist && artist.data.map((canzone)=>{
                                       return(
                                     <Songalbum  canzone={canzone}/>)
                                 })}  
                               </Col>
                          </Row>
                          </Col>
    
            </Row>)}
        </>

    )

}





