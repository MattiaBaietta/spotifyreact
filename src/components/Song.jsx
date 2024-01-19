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



        //   <div class="col text-center" id=${songInfo.id}>
        //     <a href="/album_page.html?id=${songInfo.album.id}">
        //       <img class="img-fluid" src=${songInfo.album.cover_medium
        // } alt="1" />
        //     </a>
        //     <p>
        //       <a href="/album_page.html?id=${songInfo.album.id}">
        //         Album: "${songInfo.album.title.length < 16
        //   ? `${songInfo.album.title}`
        //   : `${songInfo.album.title.substring(0, 16)}...`
        // }"<br>
        //       </a>
        //       <a href="/artist_page.html?id=${songInfo.artist.id}">
        //         Artist: ${songInfo.artist.name}
        //       </a>
        //     </p>
        //   </div>`