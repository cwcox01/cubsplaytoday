import React from "react";

function Prospects() {
  return (
    <div className="prospects" id="prospect-section">
      <div className="prospects-header">
        <h3 className="section-header">Chicago Cubs Prospects</h3>
      </div>
      <div className="prospect-list-1">
        <h5 className="prospect-list-scroll ps-2 schedule-standings-header">
          Prospect List
        </h5>
        <div className="prospect-list-embed">
          <iframe
            className="prospect-iframe"
            src="https://www.mlb.com/prospects/2022/cubs/"
            width="100%"
            height="300"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Prospects;
