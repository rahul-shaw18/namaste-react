import ItemList from "./ItemList";

const RestaurantCategory = ({ resCat, showItems, setShowIndexParent }) => {
  const { title, itemCards } = resCat;

  const handleClick = () => {
    setShowIndexParent();
  };
  return (
    <div className=" ">
      <div className="mx-auto w-6/12 my-4 bg-gray-50 shadow-lg p-4 cursor-pointer">
        <header className="flex justify-between " onClick={handleClick}>
          <span className="font-bold text-lg">
            {title + " (" + itemCards.length + ")"}
          </span>
          <span>🔽</span>
        </header>
        {showItems && <ItemList items={itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
