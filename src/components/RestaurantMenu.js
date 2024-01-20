import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    const { resId } = useParams();

    //Custom Hook
    const resInfo = useRestaurantMenu(resId);
    console.log(resInfo);

    const [showIndex, setShowIndex] = useState(null);
    const dummy = "Dummy Data";

    if(resInfo === null) {
        return <Shimmer />;
    }

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>

            {/* <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => (
                <li key={item.card.info.id}>
                    {item.card.info.name} -{" Rs."}
                    {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                </li>
                ))}
            </ul> */}

            {/* categories accordions */}
            {categories.map((category, index) => (
               <RestaurantCategory key={category?.card?.card.title} data={category?.card?.card} 
                    showItems={index === showIndex ? true : false} 
                    setShowIndex={() => setShowIndex(index)} dummy={dummy} />  
            ))}
        </div>
    )
}

export default RestaurantMenu;