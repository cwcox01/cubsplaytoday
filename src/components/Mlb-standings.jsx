import React from "react";
import { useState, useEffect } from "react";

function Mlbstandings() {
  // getting today's date and converting it to a string

  const [standings, setStandings] = useState(undefined);
  const [loading, setLoading] = useState(true);

  const standingsUrl =
    "https://statsapi.mlb.com/api/v1/standings?leagueId=103,104&season=2023&date=2023-10-05&standingsTypes=regularSeason,springTraining,firstHalf,secondHalf&hydrate=division,conference,sport,league,team(nextSchedule(team,gameType=[R,F,D,L,W,C],inclusive=false),previousSchedule(team,gameType=[R,F,D,L,W,C],inclusive=true))";

  useEffect(() => {
    fetch(standingsUrl)
      .then((response) => response.json())
      .then((standings) => {
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

  const seasonStatus = nlCentralDivision?.league.seasonState.toLowerCase();
  let cubSeasonStatusText = "";

  if (seasonStatus === "spring training") {
    cubSeasonStatusText = "Spring Training";
  } else if (seasonStatus === "regular season") {
    cubSeasonStatusText = "Regular Season";
  } else {
    cubSeasonStatusText = "Offseason";
  }

  return (
    <div className="mlb-division-standings">
      <div className="chi-division-standings">
        <h5 className="cubs-record-header">Cubs Record</h5>
        {!loading && (
          <div className="cubs-record-info">
            <p>
              Season: {cubsRecordData.season} {cubSeasonStatusText}
            </p>
            <p>Wins: {cubsRecordData.leagueRecord.wins}</p>
            <p>Losses: {cubsRecordData.leagueRecord.losses}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Mlbstandings;
