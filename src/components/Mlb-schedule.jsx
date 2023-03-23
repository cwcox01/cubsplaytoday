import React from "react";
import { useState, useEffect } from "react";

const CUBS_ID = 112;

const todayDate = new Date().toLocaleDateString("en-US");

function Mlbschedule() {
  // setting a space variable for Away/Home Record between the string home/away record and the actual record
  const spaceRecord = " ";

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const scheduleUrl =
    "https://statsapi.mlb.com/api/v1/schedule?lang=en&sportId=1&hydrate=team(venue(timezone)),venue(timezone),game(seriesStatus,seriesSummary,tickets,promotions,sponsorships,content(summary,media(epg))),seriesStatus,seriesSummary,linescore,tickets,event(tickets),radioBroadcasts,broadcasts(all)&season=2023&startDate=2023-02-25&endDate=2023-10-01&teamId=112&eventTypes=primary&scheduleTypes=games,events,xref";

  useEffect(() => {
    fetch(scheduleUrl)
      .then((response) => response.json())
      .then((usefulData) => {
        console.log("schedule data", usefulData);
        setLoading(false);
        setData(usefulData);
      })
      .catch((e) => {
        console.error(`An error occurred: ${e}`);
      });
  }, []);

  let cubsGameToday = null;
  if (data) {
    var date = new Date();
    var year = date.toLocaleString("default", { year: "numeric" });
    const month = date.toLocaleString("default", { month: "2-digit" });
    const day = date.toLocaleString("default", { day: "2-digit" });

    // Generate yyyy-mm-dd date string
    const today = year + "-" + month + "-" + day;

    // Find the first game involving the Cubs that is being played today
    cubsGameToday = data.dates
      .flatMap((date) => date.games)
      .find((game) => {
        const isCubsGame =
          game.teams.away.team.id === 112 || game.teams.home.team.id === 112;
        const isToday = game.officialDate === today;
        console.log("date2", isToday);
        console.log("date3", game.officialDate);
        return isCubsGame && isToday;
      });
  }

  const cubsTimeToday = {
    gameDate: new Date(cubsGameToday?.gameDate),
    // Other game information...
  };

  const gameTime = cubsTimeToday.gameDate.toLocaleTimeString("en-US", {
    localeMatcher: "best fit",
    timeZone: "America/New_York",
    hour: "2-digit",
    minute: "2-digit",
  });

  let dateOfGame = cubsTimeToday.gameDate.toLocaleDateString("en-US", {
    localeMatcher: "best fit",
    timeZone: "America/New_York",
  });

  const cubsWon = cubsGameToday?.seriesStatus?.winningTeam?.id === CUBS_ID;

  return (
    <div className="mlb-schedule-container pt-3">
      <div className="mlb-schedule1 pt-3">
        {!loading && cubsGameToday ? (
          <div className="chi-game">
            <div>
              <p className="schedule-standings-header ">
                Game Date: {dateOfGame}{" "}
              </p>
              <p>Home</p>
              <p>{cubsGameToday.teams.home.team.name}</p>
              <p>
                Record:{spaceRecord}
                {cubsGameToday.teams.home.leagueRecord.wins}-
                {cubsGameToday.teams.home.leagueRecord.losses}
              </p>
              <p>Score: {cubsGameToday.teams.home.score}</p>
              <div className="pt-3">
                <p className="current-inning">
                  Current Inning: {cubsGameToday.linescore.inningState}{" "}
                  {cubsGameToday.linescore.currentInning}
                </p>
                <p>Game Status: {cubsGameToday.status.detailedState}</p>

                {cubsWon && (
                  <div className=" cubs-flag cubs-flag-mlb ps-3 pe-3">
                    <h1 className="mb-0">W</h1>
                  </div>
                )}
              </div>
            </div>
            <div>
              <p>Game Time: {gameTime} EST</p>
              <p>Away</p>
              <p>{cubsGameToday.teams.away.team.name}</p>
              <p>
                Record:{spaceRecord}
                {cubsGameToday.teams.away.leagueRecord.wins}-
                {cubsGameToday.teams.away.leagueRecord.losses}
              </p>
              <p>Score: {cubsGameToday.teams.away.score}</p>
            </div>
          </div>
        ) : (
          <div>
            <p className="schedule-standings-header">
              Todays Date: {todayDate}
            </p>
            <p className="schedule-standings-header">No cubs game today.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Mlbschedule;
