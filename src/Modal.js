import React from 'react';
import './Modal.css'  // Importing the Modal CSS for styling

export default function Modal({ message, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
