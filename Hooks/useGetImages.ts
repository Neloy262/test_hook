import { db } from "../db/firebase";

import { collection, query, onSnapshot, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Image } from "../types/types";

export const useGetImages = (taskId: string) => {
  const [images, setImages] = useState<
    {
      data: Image;
    }[]
  >([]);

  useEffect(() => {
    const disposer = onSnapshot(
      query(collection(db, "images"), where("taskID", "==", taskId)),
      (snapshot) => {
        setImages(
          snapshot.docs.map((snapshot) => ({
            data: snapshot.data() as Image,
          }))
        );
      }
    );

    return () => {
      disposer();
    };
  }, []);

  return images;
};
