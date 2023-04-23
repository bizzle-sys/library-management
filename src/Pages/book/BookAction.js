import { addDoc, collection, getDocs, query } from "firebase/firestore";
import { setBook } from "./BookSlice";
import { db } from "../../Config/Firebase-config/firebase-config";
import { toast } from "react-toastify";

export const getAllBooksActions = () => async (dispatch) => {
  try {
    // define search query
    const q = query(collection(db, "books"));

    // run query to get data
    let books = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      books.push({
        ...doc.data(),
        id: doc.id,
      });
    });
    dispatch(setBook(books));
  } catch (error) {
    console.log(error);
  }
};

export const addNewBookAction = (bookObj) => async (dispatch) => {
  try {
    const docRef = await addDoc(collection(db, "books"), bookObj);
    console.log(docRef);
    if (docRef?.id) {
      toast.success("New Book Added");
      // fetch all book from database and mount to redux

      dispatch(getAllBooksActions());
      return;
    }
  } catch (error) {
    toast.error("something went wrong");
  }
};
