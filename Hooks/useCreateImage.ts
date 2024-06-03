import { db } from "../db/firebase";

import { setDoc, doc, addDoc, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Image } from "../types/types";

const BASE_URL = "";
const sm = "640x853";
const lg = "1920x2560";

export const useCreateImage = (imageHash: string, taskId: string) => {
  const [image, setImage] = useState<{ data: Image; id: string }>();
  const [created, setCreated] = useState(false);

  useEffect(() => {
    const addImage = async () => {
      const imageData = {
        id: imageHash,
        taskId: taskId,
        isClose: false,
        isDeleted: false,
        urlOrigin: BASE_URL + imageHash,
        sizes: { sm: BASE_URL + imageHash + sm, lg: BASE_URL + imageHash + lg },
        type: "",
        meta: {},
      };
      const docRef = await addDoc(collection(db, "images"), imageData);

      setImage({ data: imageData, id: docRef.id });
      setCreated(true);
    };

    addImage();
  }, []);

  return [image, created];
};
