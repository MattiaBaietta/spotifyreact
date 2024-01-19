import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";


export function Song({song}){
    console.log(song)
    if(song)
    {
       return(
            <Col className="text-center">
                <Link to={"/album/"+song.album.id}>
                <img src={song.album.cover_medium} alt="" />
                </Link>
                <p>
                    <Link to={"/album/"+song.album.id}>
                    "{song.album.title.length < 16? `${song.album.title}`: `${song.album.title.substring(0, 16)}...`}"
                    </Link>
                    <Link to={"/artist/"+song.artist.name}>
                    {song.artist.name}
                    </Link>
                </p>
            </Col>
       ) 
    }
}



