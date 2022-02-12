import Post from '../components/Post';
import { useEffect, useState } from 'react'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';
import Optiondescription from '../components/classes/Optiondescription';
import { PlusCircleIcon } from "@heroicons/react/outline";
import Modal2 from '../components/Modal2';
// import { PlusCircleIcon } from "react-icons/fa"

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

  const [posts, setPosts] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    [db]
    );

    console.log(posts)

  return (
    <div className="option__container">
      <Optiondescription
        title="Computer Science"
        description="Computer science (CS) is the study of computers and algorithmic processes, 
        including their principles, their hardware and software designs,
        their applications, and their impact on society."
      />

      <Modal2 toggleModal={toggleModal2} />

      <div className="add__review">
        <PlusCircleIcon
          className='post__icon click'
          onClick={() => toggleModal2()}
        />
      </div>


      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}

    </div>
  );
}

export default ComputerScience;
