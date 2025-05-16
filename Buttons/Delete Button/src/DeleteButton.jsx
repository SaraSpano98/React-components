import { useState } from "react";
import "./index.css";

export const DeleteButton = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const handleClick = () => {
    if (isDeleting || isDeleted) return;
    setIsDeleting(true);

    setTimeout(() => {
      setIsDeleting(false);
      setIsDeleted(true);

      setTimeout(() => {
        setIsDeleted(false);
      }, 1250);
    }, 2500);
  };

  return (
    <div className="page">
      <button
        onClick={handleClick}
        className={`delete-button ${isDeleting || isDeleted ? "deleting" : ""}`}
        disabled={isDeleting || isDeleted}
        aria-live="polite"
        aria-busy={isDeleting}
      >
        <span className="button-text">
          {isDeleting || isDeleted ? "Deleting..." : "Delete"}
        </span>
        <span className="animation" aria-hidden="true">
          <span className="balls"></span>
          <span className="lid"></span>
          <span className="can">
            <span className="filler"></span>
          </span>
        </span>
      </button>
    </div>
  );
};
