export default function Modal({ message, onClose }) {
  return (
    <div className="modal">
      <div className="modal-box">
        <p>{message}</p>
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  )
}
