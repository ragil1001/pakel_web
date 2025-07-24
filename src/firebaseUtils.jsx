import { db } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

// Fetch UMKM data
export const getUmkms = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "umkm"));
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching UMKM:", error);
    throw error;
  }
};

// Fetch News data
export const getNews = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "news"));
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching News:", error);
    throw error;
  }
};

// Fetch Gallery data
export const getGallery = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "gallery"));
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching Gallery:", error);
    throw error;
  }
};
