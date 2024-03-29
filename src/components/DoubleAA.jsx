import React from "react";

// import red milb button
import RedmilbItem from "./RedmilbItem";

// starting DoubleA function
function DoubleAA() {
  return (
    <div className="site-padding" id="double-a-section">
      <h3 className="section-header white-text-color">
        AA - Tennessee Smokies
      </h3>
      <div className="aa-division-standings">
        <h5 className="white-text-color">Division Standings</h5>
        <div className="aa-division-standings mb-3">
          <RedmilbItem
            redBtnUrl="https://www.milb.com/tennessee/standings/"
            redBtnText="Division Standings"
          />
        </div>
      </div>
      <div className="aa-schedule">
        <h5 className="white-text-color">Smokies Schedule</h5>
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
