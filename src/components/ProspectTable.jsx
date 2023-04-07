import React from "react";

// importing cubs prospect list
import list from "./list.json";

// importing prospectitem component containing table rows
import ProspectItem from "./ProspectItem";

//variable to access prospect list json items
const cubProspect = list.prospect;

export default function ProspectTable() {
  return (
    <div className="prospect-list">
      <div>
        <table className="white-text-color prospect-table">
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Position</th>
            <th>Level</th>
          </tr>
          {cubProspect.map((prospect, index) => (
            <ProspectItem
              key={index}
              prospectRank={prospect.Rank}
              prospectName={prospect.Player}
              prospectPosition={prospect.Position}
              prospectLevel={prospect.Level}
            />
          ))}
        </table>
      </div>
    </div>
  );
}
