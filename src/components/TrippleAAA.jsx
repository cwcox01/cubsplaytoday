import React from "react";

// importing blue item
import BluemilbItem from "./BluemilbItem";

// starting tripplea function
function TrippleAAA() {
  return (
    <div
      className="red-background-color white-text-color site-padding"
      id="tripple-a-section"
    >
      <h3 className="section-header">AAA - Iowa Cubs</h3>
      <div className="aaa-division-standings">
        <h5 className="schedule-standings-header">Division Standings</h5>
        <div className="iowa-division-standings mb-3">
          <BluemilbItem
            blueBtnUrl="https://www.milb.com/iowa/standings/"
            blueBtnText="Division Standings"
          />
        </div>
      </div>
      <div className="aaa-schedule">
        <h5 className="schedule-standings-header">Iowa Schedule</h5>
        <div className="iowa-schedule">
          <BluemilbItem
            blueBtnUrl="https://www.milb.com/iowa/schedule/2023-04"
            blueBtnText="Cubs Schedule"
          />
        </div>
      </div>
    </div>
  );
}

export default TrippleAAA;
