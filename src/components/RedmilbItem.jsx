import React from "react";

export default function RedmilbItem({ redBtnUrl, redBtnText }) {
  return (
    <button className="red-milb-button">
      <a href={redBtnUrl} target="_blank" rel="noreferrer">
        <span>{redBtnText}</span>
      </a>
    </button>
  );
}
