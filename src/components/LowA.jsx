import React from "react";

// importing red milb button
import RedmilbItem from "./RedmilbItem";

// starting lowA function
function LowA() {
  return (
    <div className="site-padding" id="low-a-section">
      <h3 className="section-header white-text-color">
        Single A - Myrtle Beach Pelicans
      </h3>
      <div className="a-division-standings">
        <h5 className="white-text-color">Division Standings</h5>
        <div className="a-division-standings mb-3">
          <RedmilbItem
            redBtnUrl="https://www.milb.com/myrtle-beach/standings/"
            redBtnText="Division Standings"
          />
        </div>
      </div>
      <div className="aa-schedule">
        <h5 className="white-text-color">Pelicans Schedule</h5>
        <div className="ten-schedule">
          <RedmilbItem
            redBtnUrl="https://www.milb.com/myrtle-beach/schedule/2023-04"
            redBtnText="Pelicans Schedule"
          />
        </div>
      </div>
    </div>
  );
}

export default LowA;
