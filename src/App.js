import React, { useState } from "react";
import './index.css';
import Modal from './Modal';
export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState("");
  
  function displayMessage(num) {
    setMessage("Button Clicked: " + num);
    setIsModalOpen(true)
  }
  function closeModal() {
    setIsModalOpen(false);
  }


   return (
    <div className="app">
      <button onClick={() => displayMessage(46)}>Click</button>

      {isModalOpen && (
        <Modal message={message} onClose={closeModal} />
      )}
    </div>
  );
}