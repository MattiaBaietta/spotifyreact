
import { useParams } from "react-router-dom"
import { fetchSingola } from "./Fetchfunctions"
import { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import { Songalbum } from "./Songalbum"

export function Albumpage() {
    const param = useParams()
    console.log(param)
    const [album, setalbum] = useState(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAlbum = async () => {
            try {
                const results = await fetchSingola("album/", param.id)
                setalbum(results)
                console.log(results)
                setLoading(false)
            } catch (e) {
                console.log(e)
                setLoading(false)
            }

        }
        fetchAlbum()
    }, [param.id])

   




    return (

        <>{loading ? (
            // Visualizza l'indicazione di caricamento
            <p>Caricamento...</p>):(
            <Row>
                <Col className="col-md-3 pt-5 text-center" id="img-container">
                    {album && <>
                        <img src={album.cover} className="card-img img-fluid" alt="Album" />
                            <div className="mt-4 text-center">
                                <p className="album-title">{album.title}</p>
                            </div>
                            <div className="text-center">
                                <p className="artist-name">{album.artist.name}</p>
                            </div>
                            <div className="mt-4 text-center">
                                <button id="btnPlay" className="btn btn-success" type="button">Play</button>
                            </div></>}
                            
                </Col>
                <Col className="col-md-8 p-5">
                            <Row >
                                <Col className="col-md-10 mb-5" id="tracklist">
                                     {album && album.tracks.data.map((canzone)=>{
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





