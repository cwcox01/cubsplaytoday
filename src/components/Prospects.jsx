import React from "react";

import ProspectTable from "./ProspectTable";

function Prospects() {
  return (
    <div className="site-padding red-background-color" id="prospect-section">
      <div className="prospects-header">
        <h3 className="section-header white-text-color">
          Chicago Cubs Prospects
        </h3>
      </div>
      <div className="prospect-list-1">
        <h5 className="prospect-list-scroll ps-2 white-text-color">
          Prospect List Top 10
        </h5>
        <ProspectTable />
      </div>
    </div>
  );
}

export default Prospects;
