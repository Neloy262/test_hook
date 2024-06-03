import { db } from "../db/firebase";

import { collection, query, onSnapshot, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Task } from "../types/types";

export const useGetTasks = (userId: string) => {
  const [tasks, setTasks] = useState<
    {
      data: Task;
    }[]
  >([]);

  useEffect(() => {
    const disposer = onSnapshot(
      query(collection(db, "Tasks"), where("userId", "==", userId)),
      (snapshot) => {
        setTasks(
          snapshot.docs.map((snapshot) => ({
            data: snapshot.data() as Task,
          }))
        );
      }
    );

    return () => {
      disposer();
    };
  }, []);

  return tasks;
};
