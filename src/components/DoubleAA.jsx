import React from "react";

// import red milb button
import RedmilbItem from "./RedmilbItem";

// starting DoubleA function
function DoubleAA() {
  return (
    <div className="double-a" id="double-a-section">
      <h3 className="section-header">AA - Tennessee Smokies</h3>
      <div className="aa-division-standings">
        <h5 className="schedule-standings-header">Division Standings</h5>
        <div className="aa-division-standings mb-3">
          <RedmilbItem
            redBtnUrl="https://www.milb.com/tennessee/standings/"
            redBtnText="Division Standings"
          />
        </div>
      </div>
      <div className="aa-schedule">
        <h5 className="schedule-standings-header">Smokies Schedule</h5>
        <div className="ten-schedule">
          <RedmilbItem
            redBtnUrl="https://www.milb.com/tennessee/schedule/2023-04"
            redBtnText="Smokies Schedule"
          />
        </div>
      </div>
    </div>
  );
}

export default DoubleAA;
