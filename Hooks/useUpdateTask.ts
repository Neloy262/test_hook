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
} from "firebase/firestore";
import { PartialTask } from "../types/types";

export const updateTask = async (taskId: string, data: PartialTask) => {
  const taskRef = doc(db, "tasks", taskId);
  await updateDoc(taskRef, data);
};
