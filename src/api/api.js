
import { db } from '../firebase/config';
import { 
  collection, 
  getDocs, 
  addDoc, 
  doc, 
  updateDoc, 
  deleteDoc,
  getDoc 
} from "firebase/firestore";
export const getRecetas = async () => {
  try {
    const collectionRef = collection(db, "recetas");
    const data = await getDocs(collectionRef);
    return data.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error al obtener recetas: ", error);
    return [];
  }
};

export const createReceta = async (receta) => {
  try {
    const collectionRef = collection(db, "recetas");
    const docRef = await addDoc(collectionRef, receta);
    return { id: docRef.id, ...receta };
  } catch (error) {
    console.error("Error,no se puede crear ", error);
    return null;
  }
};

export const updateReceta = async (id, updatedReceta) => {
  try {
    const recetaDoc = doc(db, "recetas", id);
    await updateDoc(recetaDoc, updatedReceta);
    return true;
  } catch (error) {
    console.error("Error,no se puede actualizar", error);
    return false;
  }
};

export const deleteReceta = async (id) => {
  try {
    const recetaDoc = doc(db, "recetas", id);
    await deleteDoc(recetaDoc);
    return true;
  } catch (error) {
    console.error("Error, no se pudo eliminwr: ", error);
    return false;
  }
};

export const getRecetaById = async (id) => {
  try {
    const docRef = doc(db, "recetas", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      console.log("No se encontró la receta!");
      return null;
    }
  } catch (error) {
    console.error("Error ", error);
    return null;
  }
};

