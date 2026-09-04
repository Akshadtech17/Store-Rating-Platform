import { useEffect, useState } from "react";
import { getStores } from "../services/storeService";

const Stores = () => {
  const [stores, setStores] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const data = await getStores();
        setStores(data);
      } catch (error) {
        console.error("Failed to fetch stores", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStores();
  }, []);

  if (loading) {
    return <p>Loading stores...</p>;
  }

  return (
    <div>
      <h1>Stores</h1>

      {stores.map((store) => (
        <div key={store.id}>
          <h2>{store.name}</h2>
          <p>{store.address}</p>
        </div>
      ))}
    </div>
  );
};

export default Stores;