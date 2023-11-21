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
    <div className="res-card" style={styleCard}>
      <img src="" alt="" srcSet={
        CON_URL +
        cloudinaryImageId
      } />

      <h3>{name}</h3>
      {cuisines.map((val, index) => <span key={index}>{val + ", "}</span>)}
      <h4>{avgRating} starts</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
