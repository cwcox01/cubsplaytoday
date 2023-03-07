import React from "react";

// importing blue milb item
import BluemilbItem from "./BluemilbItem";

// starting advanced a function
function AdvA() {
  return (
    <div className="adv-a" id="adv-a-section">
      <h3 className="section-header">Advanced A - South Bend Cubs</h3>
      <div className="adva-division-standings">
        <h5 className="ps-2 schedule-standings-header">Division Standings</h5>
        <div className="adva-division-standings mb-3">
          <BluemilbItem
            blueBtnUrl="https://www.milb.com/south-bend/standings/"
            blueBtnText="Division Standings"
          />
        </div>
      </div>
      <div className="adva-schedule">
        <h5 className="ps-2 schedule-standings-header">SB Cubs Schedule</h5>
        <div className="sbc-schedule">
          <BluemilbItem
            blueBtnUrl="https://www.milb.com/south-bend/schedule/2023-04"
            blueBtnText="SB Cubs Schedule"
          />
        </div>
      </div>
    </div>
  );
}

export default AdvA;
