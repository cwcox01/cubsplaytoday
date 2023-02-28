import React from "react";

// starting advanced a function
function AdvA() {
  return (
    <div className="adv-a" id="adv-a-section">
      <h3 className="section-header">Advanced A - South Bend Cubs</h3>
      <div className="adva-division-standings">
        <h5 className="ps-2 schedule-standings-header">Division Standings</h5>
        <div className="adva-division-standings mb-3">
          <button className="blue-milb-button">
            <a
              href="https://www.milb.com/south-bend/standings/"
              target="_blank"
              rel="noreferrer"
            >
              <span>Division Standings</span>
            </a>
          </button>
        </div>
      </div>
      <div className="adva-schedule">
        <h5 className="ps-2 schedule-standings-header">SB Cubs Schedule</h5>
        <div className="sbc-schedule">
          <button className="blue-milb-button">
            <a
              href="https://www.milb.com/south-bend/schedule/2023-04"
              target="_blank"
              rel="noreferrer"
            >
              <span>SB Cubs Schedule</span>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdvA;
