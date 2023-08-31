import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorities:[],
    totalFavorites:0,
    addFavorite:(favoritieMeetup) => {},
    removeFavorite:(meetupId) => {},
    itemIsFavorite:(meetupId) => {},
});

export function FavoritesContextProvider(props){
    const [useFavorites,setUserFavorites] = useState([]);

    function addFavoriteHandler(favoritieMeetup){
        setUserFavorites((prevUserFavorites)=>{
            return prevUserFavorites.concat(favoritieMeetup);
        });
    }

    function removeFavoriteHandler(meetupId){
        setUserFavorites((prevUserFavorites)=>{
            return prevUserFavorites.filter((meetup)=>meetup.id !== meetupId);
        });
    }

    function itemIsFavoriteHandler(meetupId){
        return useFavorites.some((meetup) => meetup.id === meetupId)
    }

    const context = {
        favorities:useFavorites,
        totalFavorites:useFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}


export default FavoritesContext;