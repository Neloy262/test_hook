import { db } from "../db/firebase";

import { collection, query, where, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Shop } from "../types/types";

export const useGetShops = (area: string) => {
  const [shops, setShops] = useState<
    {
      data: Shop;
    }[]
  >([]);

  useEffect(() => {
    const disposer = onSnapshot(
      query(collection(db, "shops"), where("area", "==", area)),
      (snapshot) => {
        setShops(
          snapshot.docs.map((snapshot) => ({
            data: snapshot.data() as Shop,
            id: snapshot.id,
          }))
        );
      }
    );

    return () => {
      disposer();
    };
  }, []);

  return shops;
};
