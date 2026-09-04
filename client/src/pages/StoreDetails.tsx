import { useParams } from "react-router-dom";

const StoreDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Store Details</h1>
      <p>Store ID: {id}</p>
    </div>
  );
};

export default StoreDetails;