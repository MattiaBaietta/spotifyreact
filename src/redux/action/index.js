
export const ADD_FAVOURITES = "ADD_FAVOURITES"
export const REMOVE_FAVOURITES = "REMOVE_FAVOURITES"


export const addFavouritesAction = song => {
    return {
        type: ADD_FAVOURITES,
        payload: song
    }
}

export const removeFavouritesAction = song => {
    return {
        type: REMOVE_FAVOURITES,
        payload: song
    }
}
