import React from 'react';

function Modals({ id, title, content, isOpen, onClose }) {
  return (
    <dialog id={id} className={`modal ${isOpen ? 'modal-open' : ''}`}>
      <div className="modal-box">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="py-4">{content}</p>
        <div className="modal-action">
          <button onClick={onClose} className="btn">Cerrar</button>
        </div>
      </div>
    </dialog>
  );
}

export default Modals;