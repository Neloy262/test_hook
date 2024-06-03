import { useEffect, useState } from "react";
import { db } from "../db/firebase";
import {
  doc,
  updateDoc,
  getDocs,
  query,
  collection,
  where,
  getDoc,
  serverTimestamp,
} from "firebase/firestore";
import { Image, PartialImage } from "../types/types";

export const updateImage = async (taskId: string, imageId: string, update: PartialImage) => {
  const imageRef = doc(db, "tasks", taskId, "images", imageId);

  await updateDoc(imageRef, update);

  const docSnap = await getDoc(imageRef);
  return docSnap.data();
};
