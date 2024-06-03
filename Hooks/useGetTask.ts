import { db } from "../db/firebase";

import { collection, query, onSnapshot, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Task } from "../types/types";

export const useGetTask = (id: string) => {
  const [task, setTask] = useState<{ data: Task; id: string }>();

  useEffect(() => {
    const disposer = onSnapshot(
      query(collection(db, "tasks"), where("id", "==", id)),
      (snapshot) => {
        const taskData = snapshot.docs;
        setTask({ data: taskData[0].data() as Task, id: taskData[0].id });
      }
    );
    return () => {
      disposer();
    };
  }, []);
  return task;
};
