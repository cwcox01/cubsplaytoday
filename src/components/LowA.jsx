import React from "react";

// starting lowA function
function LowA() {
  return (
    <div className="low-a" id="low-a-section">
      <h3 className="section-header">Single A - Myrtle Beach Pelicans</h3>
      <div className="a-division-standings">
        <h5 className="schedule-standings-header">Division Standings</h5>
        <div className="a-division-standings mb-3">
          <button className="red-milb-button">
            <a
              href="https://www.milb.com/myrtle-beach/standings/"
              target="_blank"
            >
              <span>Division Standings</span>
            </a>
          </button>
        </div>
      </div>
      <div className="aa-schedule">
        <h5 className="schedule-standings-header">Pelicans Schedule</h5>
        <div className="ten-schedule">
          <button className="red-milb-button">
            <a
              href="https://www.milb.com/myrtle-beach/schedule/2023-04"
              target="_blank"
            >
              <span>Pelicans Schedule</span>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LowA;
