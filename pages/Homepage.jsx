import React from "react";
import Landing from "../components/Landing.jsx"
import Modal from "../components/Modal.jsx"
import Testimonials from "../components/Testimonials.jsx"
import Popular from "../components/Popular.jsx"


let isModalOpen = false

const Home = () => {
    return (
        <>
        <Landing
            toggleModal={toggleModal}
        />
        <main>
            <Modal 
                toggleModal={toggleModal}
            />
            <Testimonials />
            <Popular />
        </main>
        </>
          
    );

    function toggleModal() {
        if (isModalOpen) {
            isModalOpen = false
            return document.body.classList.remove("modal--open")
        }
        isModalOpen = true
        document.body.classList += " modal--open"
      }

};



export default Home;
