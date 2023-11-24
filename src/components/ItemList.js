import { CON_URL } from "../utils/constants";

const ItemList = ({ items }) => {
//   console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex  border-gray-200 border-b-2"
        >
          <div className="p-2 m2-2 text-left w-9/12">
            <div className="">
              <span>{item.card.info.name + " "}</span>
              <span>
                - ₹{(item.card.info.price | item.card.info.defaultPrice) / 100}
              </span>
            </div>

            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4 relative">
            <button className="px-2 py-1 bg-white shadow-lg absolute bottom-0 left-1/2 transform -translate-x-1/2 rounded-lg">
              Add +
            </button>
            <img
              className="w-full"
              src={CON_URL + item.card.info.imageId}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
