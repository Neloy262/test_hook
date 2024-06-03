import { db } from "../db/firebase";

import {
  collection,
  query,
  onSnapshot,
  where,
  getDocs,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { User } from "../types/types";

export const useGetMe = (userId: string) => {
  const [user, setUser] = useState<{ data: User; id: string }>();

  useEffect(() => {
    const getUser = async () => {
      const q = query(collection(db, "users"), where("id", "==", userId));
      const querySnapshot = await getDocs(q);
      setUser({
        data: querySnapshot.docs[0].data() as User,
        id: querySnapshot.docs[0].id,
      });
    };
    getUser();
  }, []);
  return user;
};
