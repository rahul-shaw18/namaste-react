import { CON_URL } from "../utils/constants";

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo } =
    resData?.info; // optional chaining
  const { deliveryTime } = resData?.info?.sla;

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200 hover:rounded-lg" >
      <img
        className="rounded-lg"
        src=""
        alt=""
        srcSet={CON_URL + cloudinaryImageId}
      />

      <h3 className="font-bold py-4 text-lg">{name}</h3>
      {cuisines.map((val, index) => (
        <span key={index}>{val + ", "}</span>
      ))}
      <h4>{avgRating} starts</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

//Higher order Component

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props}></RestaurantCard>
      </div>
    )
  }
}

export default RestaurantCard;
