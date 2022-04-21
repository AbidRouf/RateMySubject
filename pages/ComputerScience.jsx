import Post from '../components/Post';
import { useEffect, useState } from 'react'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';
import Optiondescription from '../components/classes/Optiondescription';
import { PlusCircleIcon } from "@heroicons/react/outline";
import Modal2 from '../components/Modal2';
import { signIn, useSession } from 'next-auth/react';



let isModalOpen = false

function toggleModal2() {
  if (isModalOpen) {
    isModalOpen = false
    return document.body.classList.remove("modal--open")
  }
  isModalOpen = true
  document.body.classList += " modal--open"
}

function ComputerScience() {
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "reviews"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    [db]
  );

  return (
    <div className="option__container">

      <Optiondescription
        title="Computer Science"
        description="Computer science (CS) is the study of computers and algorithmic processes, 
          including their principles, their hardware and software designs,
          their applications, and their impact on society."
      />

      <Modal2 toggleModal={toggleModal2} />

        {session ? (
          <div className="add__review">
            <PlusCircleIcon
              className='post__icon click'
              onClick={() => toggleModal2()}
            />
          </div>
        ) : (
          <div className="option__signin">
          <button
            className='signin btn'
            onClick={signIn}>Sign In To Post</button>
      </div>
        )}


      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          caption={post.data().caption}
        />
      ))}

    </div>
  );
}

export default ComputerScience;
