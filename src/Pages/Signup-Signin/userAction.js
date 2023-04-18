import { toast } from "react-toastify";
import { auth, db } from "../../Config/Firebase-config/firebase-config";
import { doc, setDoc } from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";

// create new user
export const loginUser = (data) => async (dispatch) => {
  try {
    const pendingUser = signInWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );

    toast.promise(pendingUser, {
      pending: "Please wait...",
    });
    const { user } = await pendingUser;

    if (user.uid) {
      // get user info and mount into redux
    }
  } catch (error) {
    toast.error(error.message);
  }
};
