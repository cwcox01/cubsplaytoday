import React from "react";
import list from "./list.json";

const cubProspect = list.prospect;
console.log(cubProspect);
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
          <p>
            {cubProspect[0].Rank} {cubProspect[0].Player}{" "}
            {cubProspect[0].Position}
          </p>
          <p>
            {cubProspect[1].Rank} {cubProspect[1].Player}{" "}
            {cubProspect[1].Position}
          </p>
          <p>
            {cubProspect[2].Rank} {cubProspect[2].Player}{" "}
            {cubProspect[2].Position}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Prospects;
