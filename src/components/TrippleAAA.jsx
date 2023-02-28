import React from "react";

// starting tripplea function
function TrippleAAA() {
  return (
    <div className="tripple-a" id="tripple-a-section">
      <h3 className="section-header">AAA - Iowa Cubs</h3>
      <div className="aaa-division-standings">
        <h5 className="schedule-standings-header">Division Standings</h5>
        <div className="iowa-division-standings mb-3">
          <button className="blue-milb-button">
            <a href="https://www.milb.com/iowa/standings/" target="_blank">
              <span>Division Standings</span>
            </a>
          </button>
        </div>
      </div>
      <div className="aaa-schedule">
        <h5 className="schedule-standings-header">Iowa Schedule</h5>
        <div className="iowa-schedule">
          <button className="blue-milb-button">
            <a
              href="https://www.milb.com/iowa/schedule/2023-04"
              target="_blank"
            >
              <span>Cubs Schedule</span>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TrippleAAA;
