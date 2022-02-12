import { CameraIcon } from "@heroicons/react/outline";
import { useRef, useState } from "react";
import { db, storage } from "../firebase";
import { addDoc, collection, doc, serverTimestamp, updateDoc } from "@firebase/firestore";
import { useSession } from "next-auth/react";
import { ref, getDownloadURL, uploadString } from "@firebase/storage";
import { FaTimes} from "react-icons/fa"

const Modal2 = ({ toggleModal }) => {

    const { data: session } = useSession();
    const filePickerRef = useRef(null);
    const captionRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);

    const uploadPost = async () => {
        if (loading) return;

        setLoading(true);

        // Create a post and add to firestore 'posts' collection
        // Get the post ID for the newly created post
        // Upload the image to firebase storage with the post ID
        // Get a download URL from fb storage and update the original post with image

        const docRef = await addDoc(collection(db, 'posts'), {
            username: session.user.username,
            caption: captionRef.current.value,
            profileImg: session.user.image,
            timestamp: serverTimestamp()
        });

        console.log("New doc added with ID", docRef.id);

        const imageRef = ref(storage, `posts/${docRef.id}/image`);

        await uploadString(imageRef, selectedFile, "data_url").then(
            async (snapshot) => {
                const downloadURL = await getDownloadURL(imageRef);

                await updateDoc(doc(db, "posts", docRef.id), {
                    image: downloadURL
                });
            }
        );

        setOpen(false);
        setLoading(false);
        setSelectedFile(null);

    }

    const addImageToPost = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }

        reader.onload = (readerEvent) => {
            setSelectedFile(readerEvent.target.result);
        }
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

                        {selectedFile ? (
                            <img src={selectedFile} onClick={() => setSelectedFile(null)} alt="ERROR" />
                        ) : (

                            <div
                                onClick={() => filePickerRef.current.click()}
                            >
                                <CameraIcon
                                    className="post__icon camera__icon click"
                                    aria-hidden="true"
                                />
                            </div>
                        )}

                        <div>
                            <input
                                ref={filePickerRef}
                                type="file"
                                hidden
                                onChange={addImageToPost}
                            />
                        </div>

                        <input
                            className="modal__input modal2__input"
                            type="text"
                            ref={captionRef}
                            placeholder="Write Here"
                        >
                        </input>

                        <button id="contact__submit"
                            // disabled={!selectedFile}
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
