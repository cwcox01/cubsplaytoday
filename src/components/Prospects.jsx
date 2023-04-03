import React from "react";
import list from "./list.json";
import ProspectItem from "./ProspectItem";

const cubProspect = list.prospect;

function Prospects() {
  return (
    <div className="site-padding red-background-color" id="prospect-section">
      <div className="prospects-header">
        <h3 className="section-header white-text-color">
          Chicago Cubs Prospects
        </h3>
      </div>
      <div className="prospect-list-1">
        <h5 className="prospect-list-scroll ps-2 white-text-color">
          Prospect List Top 10
        </h5>
        <div className="prospect-list">
          <div>
            <table className="white-text-color prospect-table">
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Position</th>
                <th>Level</th>
              </tr>
              <ProspectItem
                prospectRank={cubProspect[0].Rank}
                prospectName={cubProspect[0].Player}
                prospectPosition={cubProspect[0].Position}
                prospectLevel={cubProspect[0].Level}
              />
              <ProspectItem
                prospectRank={cubProspect[1].Rank}
                prospectName={cubProspect[1].Player}
                prospectPosition={cubProspect[1].Position}
                prospectLevel={cubProspect[1].Level}
              />
              <ProspectItem
                prospectRank={cubProspect[2].Rank}
                prospectName={cubProspect[2].Player}
                prospectPosition={cubProspect[2].Position}
                prospectLevel={cubProspect[2].Level}
              />
              <ProspectItem
                prospectRank={cubProspect[3].Rank}
                prospectName={cubProspect[3].Player}
                prospectPosition={cubProspect[3].Position}
                prospectLevel={cubProspect[3].Level}
              />
              <ProspectItem
                prospectRank={cubProspect[4].Rank}
                prospectName={cubProspect[4].Player}
                prospectPosition={cubProspect[4].Position}
                prospectLevel={cubProspect[4].Level}
              />
              <ProspectItem
                prospectRank={cubProspect[5].Rank}
                prospectName={cubProspect[5].Player}
                prospectPosition={cubProspect[5].Position}
                prospectLevel={cubProspect[5].Level}
              />
              <ProspectItem
                prospectRank={cubProspect[6].Rank}
                prospectName={cubProspect[6].Player}
                prospectPosition={cubProspect[6].Position}
                prospectLevel={cubProspect[6].Level}
              />
              <ProspectItem
                prospectRank={cubProspect[7].Rank}
                prospectName={cubProspect[7].Player}
                prospectPosition={cubProspect[7].Position}
                prospectLevel={cubProspect[7].Level}
              />
              <ProspectItem
                prospectRank={cubProspect[8].Rank}
                prospectName={cubProspect[8].Player}
                prospectPosition={cubProspect[8].Position}
                prospectLevel={cubProspect[8].Level}
              />
              <ProspectItem
                prospectRank={cubProspect[9].Rank}
                prospectName={cubProspect[9].Player}
                prospectPosition={cubProspect[9].Position}
                prospectLevel={cubProspect[9].Level}
              />
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prospects;
