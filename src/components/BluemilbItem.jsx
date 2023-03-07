import React from "react";

export default function BluemilbItem({ blueBtnUrl, blueBtnText }) {
  return (
    <button className="blue-milb-button">
      <a href={blueBtnUrl} target="_blank" rel="noreferrer">
        <span>{blueBtnText}</span>
      </a>
    </button>
  );
}
