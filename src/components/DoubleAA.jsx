import React from "react";

// starting DoubleA function
function DoubleAA() {
  return (
    <div className="double-a" id="double-a-section">
      <h3 className="section-header">AA - Tennessee Smokies</h3>
      <div className="aa-division-standings">
        <h5 className="schedule-standings-header">Division Standings</h5>
        <div className="aa-division-standings mb-3">
          <button className="red-milb-button">
            <a
              href="https://www.milb.com/tennessee/standings/"
              target="_blank"
              rel="noreferrer"
            >
              <span>Division Standings</span>
            </a>
          </button>
        </div>
      </div>
      <div className="aa-schedule">
        <h5 className="schedule-standings-header">Smokies Schedule</h5>
        <div className="ten-schedule">
          <button className="red-milb-button">
            <a
              href="https://www.milb.com/tennessee/schedule/2023-04"
              target="_blank"
              rel="noreferrer"
            >
              <span>Smokies Schedule</span>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DoubleAA;
