import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { removeFavouritesAction } from "../redux/action"
import { addFavouritesAction } from "../redux/action"



export function Songalbum({ canzone }) {
    
    const dispatch = useDispatch();
    const isFav = useSelector((state) => state.favourites)
    console.log(isFav)
    return (

        <div className="py-3 trackHover"
            
        >
            <Link to="preview canzone da implementare">
                <h2>{canzone.title}</h2>

            </Link>
            <FontAwesomeIcon onClick={() => {
                  if (isFav.favourites.includes(canzone.id)) {
                      dispatch(removeFavouritesAction(canzone.id))
                      console.log("canzone"+canzone+"rimossa")
                  }
                  else {
                    dispatch(addFavouritesAction(canzone.id))
                    console.log("canzone"+canzone.id+"aggiunta")
                    console.log(isFav)
                 }
            }} icon={faHeart}/>
        </div>

    )
}

