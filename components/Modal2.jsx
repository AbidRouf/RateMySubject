import { useRef, useState } from "react";
import { db, storage } from "../firebase";
import { addDoc, collection, doc, serverTimestamp, updateDoc } from "@firebase/firestore";
import { useSession } from "next-auth/react";
import { FaTimes} from "react-icons/fa"

const Modal2 = ({ toggleModal }) => {

    const { data: session } = useSession();
    const captionRef = useRef(null);
    const [loading, setLoading] = useState(false);

    const uploadPost = async () => {
        if (loading) return;

        setLoading(true);

        // Create a review and add to firestore 'reviews' collection
        // Get the review ID for the newly created review
        // Upload the image to firebase storage with the review ID

        const docRef = await addDoc(collection(db, 'reviews'), {
            username: session.user.username,
            caption: captionRef.current.value,
            profileImg: session.user.image,
            timestamp: serverTimestamp()
        });

        console.log("New doc added with ID", docRef.id);

        setOpen(false);
        setLoading(false);

    }

    return (
        <div className="modal modal2">
            <div className="modal__half modal__contact">

                <i className="modal__exit click" onClick={() => toggleModal()} >
                    <FaTimes />
                </i>

                <form className="modal2__content">
                    <div className="form__items">

                        <label>
                            Leave Your Review
                        </label>

                        <input
                            className="modal__input modal2__input"
                            type="text"
                            ref={captionRef}
                            placeholder="Write Here"
                        >
                        </input>

                        <button id="contact__submit"
                            className="form__submit form__submit2"
                            onClick={uploadPost}>
                            Leave Review
                        </button>

                    </div>
                </form>
            </div>
        </div>

    )
}

export default Modal2
