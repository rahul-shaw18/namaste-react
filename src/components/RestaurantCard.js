const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  const { resName, cuisine, rating, duration, img } = props.resData;

  return (
    <div className="res-card" style={styleCard}>
      <img src="" alt="" srcSet={img} />

      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>{rating} starts</h4>
      <h4>{duration}</h4>
    </div>
  );
};

export default RestaurantCard;
