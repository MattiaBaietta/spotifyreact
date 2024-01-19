import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartEmpty } from "@fortawesome/free-regular-svg-icons"; // Icona vuota
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { pickSongAction, removeFavouritesAction } from "../redux/action"
import { addFavouritesAction } from "../redux/action"



export function Songalbum({ canzone }) {

    const dispatch = useDispatch();
    const isFav = useSelector((state) => state.favourites)
    const actualsong=useSelector((state)=>state.song)

    const addItemToLocalStorage = (song) => {
        localStorage.setItem(song.id, JSON.stringify(song));
    };

    const getItemFromLocalStorage = (id) => {
        const storedData = localStorage.getItem(id);
        return storedData ? JSON.parse(storedData) : null;
    };

    const removeItemFromLocalStorage = (id) => {
        localStorage.removeItem(id);
    };


    return (
        <div className="  text-white d-flex py-3 trackHover">
            <div>
                <h2  onClick={()=>{
                    dispatch(pickSongAction(canzone))
                    console.log(actualsong)
                }}>{canzone.title}</h2>
            </div>
            <FontAwesomeIcon
                onClick={() => {
                    
                    if (getItemFromLocalStorage(canzone.id)) {
                        removeItemFromLocalStorage(canzone.id);
                        dispatch(removeFavouritesAction(canzone.id));
                        
                        console.log("canzone " + canzone.id + " rimossa");
                    } else {
                        addItemToLocalStorage(canzone);
                        dispatch(addFavouritesAction(canzone.id));
                        console.log("canzone " + canzone.id + " aggiunta");
                    }
                }}
                style={{ color: "green" }}
                icon={getItemFromLocalStorage(canzone.id) ? faHeart : faHeartEmpty}
            />
        </div>
    );
}

