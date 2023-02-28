import React from "react";
import { useState, useEffect } from "react";

function Mlbstandings() {
  // getting today's date and converting it to a string
  let today = new Date();
  let dateString = today.toLocaleDateString();

  const [standings, setStandings] = useState(undefined);
  const [loading, setLoading] = useState(true);

  const standingsUrl =
    "https://statsapi.mlb.com/api/v1/standings?leagueId=103,104&season=2022&date=2022-10-05&standingsTypes=regularSeason,springTraining,firstHalf,secondHalf&hydrate=division,conference,sport,league,team(nextSchedule(team,gameType=[R,F,D,L,W,C],inclusive=false),previousSchedule(team,gameType=[R,F,D,L,W,C],inclusive=true))";

  useEffect(() => {
    fetch(standingsUrl)
      .then((response) => response.json())
      .then((standings) => {
        console.log("standing data", standings);
        setStandings(standings);
        setLoading(false);
      })
      .catch((e) => {
        console.error(`An error occurred: ${e}`);
      });
  }, []);

  const nlCentralDivision = standings?.records.filter(
    (record) => record.division.name === "National League Central"
  )[0];

  const cubsRecordData = nlCentralDivision?.teamRecords.filter(
    (record) => record.team.teamName === "Cubs"
  )[0];

  console.log("nlCentralDivision", nlCentralDivision);
  console.log("cubsRecordData", cubsRecordData);

  return (
    <div className="mlb-division-standings">
      <div className="chi-division-standings">
        <h5 className="cubs-record-header">Cubs Record</h5>
        {!loading && (
          <div className="cubs-record-info">
            <p>Season: {cubsRecordData.season}</p>
            <p>Wins: {cubsRecordData.leagueRecord.wins}</p>
            <p>Losses: {cubsRecordData.leagueRecord.losses}</p>
          </div>
        )}
        <h4 className="pt-5 pb-0 cubs-date-today">
          Today's Date: {dateString}{" "}
        </h4>
      </div>
    </div>
  );
}

export default Mlbstandings;
