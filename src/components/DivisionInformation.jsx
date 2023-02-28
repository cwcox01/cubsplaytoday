import React from "react";

function DivisionInformation(props) {
  const {
    divisionTeamArray0,
    divisionWinsArray0,
    divisionLossArray0,
    divisionPctArray0,
    divisionGamesBackArray0,
  } = props;

  return (
    <div className="division-info-all">
      <div>
        <p>Team Name: {divisionTeamArray0}</p>
        <p>Wins: {divisionWinsArray0}</p>
        <p>Losses: {divisionLossArray0}</p>
        <p>Winning Percentage: {divisionPctArray0}</p>
        <p>Games Back: {divisionGamesBackArray0}</p>
      </div>
    </div>
  );
}

export default DivisionInformation;
