import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp, setDoc, doc, deleteDoc } from "@firebase/firestore";
import {
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    HeartIcon,
    PaperAirplaneIcon,
} from "@heroicons/react/outline";

import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid"
import { useSession } from "next-auth/react";
import { useEffect, useState, React } from "react";
import { db } from "../firebase";


function Post({ id, username, userImg, img, caption }) {
    const { data: session } = useSession();
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const [likes, setLikes] = useState([]);
    const [hasLiked, setHasLiked] = useState(false);

    useEffect(() => onSnapshot(query(collection(db, 'reviews', id, 'comments'), orderBy('timestamp', 'desc')), (snapshot) => setComments(snapshot.docs)), [db, id]);

    useEffect(() => onSnapshot(collection(db, 'reviews', id, 'likes'), (snapshot) => setLikes(snapshot.docs)), [db, id]);

    useEffect(() => setHasLiked(likes.findIndex((like) => like.id === session?.user?.uid) !== -1), [likes]);

    const likePost = async () => {
        if (hasLiked) {
            await deleteDoc(doc(db, 'reviews', id, 'likes', session.user.uid));
        } else {
            await setDoc(doc(db, 'reviews', id, 'likes', session.user.uid), {
                username: session.user.username
            })

        }
    }

    const sendComment = async (e) => {
        e.preventDefault();

        const commentToSend = comment;
        setComment('');


        await addDoc(collection(db, "reviews", id, "comments"), {
            comment: commentToSend,
            username: session.user.username,
            userImage: session.user.image,
            timestamp: serverTimestamp(),
        });
    }

    return (


        <div className='posts'>

            {/* HEADER */}
            <div className='post'>

                <img src={userImg} className='userimg' />
                <p className='p'> {username} </p>

            </div>

            {/* IMG */}
            <img src={img} className='img' />

            {/* BUTTONS */}
            {session && (
                <div>
                    {hasLiked ? (
                        <HeartIconFilled onClick={likePost} className='like__btn' />
                    ) : (
                        <HeartIcon onClick={likePost} className='post__btn' />
                    )}
                    <ChatIcon className='post__btn' />
                </div>
            )}

            {/* CAPTIONS */}
            <p className='captions'>
                {likes.length > 0 && (
                    <p className='likes'>{likes.length} likes</p>
                )}

                <span className="caption__user">{username} </span>
                {caption}
            </p>

            {/* COMMENTS */}
            {comments.length > 0 && (
                <div className="comments">
                    {comments.map(comment => (
                        <div key={comment.id} className='comment'>
                            <img className='commentpfp' src={comment.data().userImage} />
                            <p className='text-sm flex-1'><span className='font-bold'>{comment.data().username} </span>{comment.data().comment}</p>
                        </div>
                    ))}
                </div>
            )}

            {/* INPUT BOX */}
            {session && (
                <form className='post__form'>
                    <EmojiHappyIcon className='form__img' />
                    <input
                        type="text"
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                        placeholder='Reply to comment'
                        className='post__input'
                    />
                    <button onClick={sendComment} type='submit' disabled={!comment.trim()} className='leave__comment'>Post</button>
                </form>
            )}

        </div>
    )
}

export default Post
