import { LockFilled, StarFilled, UnlockFilled } from "@ant-design/icons";
import { MINI_GAMES } from "@games/index";
import { descriptionStyle, pageTitleStyle } from "GlobalStyles";
import type { ComponentType } from "react";
import { Link } from "react-router-dom";

export { MiniGamesPage };

const miniGamesMapping = new Map([
  ["space_stretch", "Space Stretch"],
  ["fly_fit", "Sky Workout"],
  ["snap", "Snapchat"],
  ["chart_squats", "Chart Squats"],
  ["matrix", "Mystery"],
  ["gym_canals", "Gym Canals"],
  ["invaders", "Space Invaders"],
  ["kayaks", "Kayaks"],
  ["runner", "Runner"],
  ["race_track", "Race Track"],
]);

const unlocked = true;
const StarFilledIcon = StarFilled as ComponentType<any>;
const UnlockFilledIcon = UnlockFilled as ComponentType<any>;
const LockFilledIcon = LockFilled as ComponentType<any>;

const MiniGamesPage = () => {
  const lockingStyle = (_unlocked: boolean) =>
    _unlocked ? { opacity: "1" } : { opacity: "0.5" };
  const itemStyle = {
    flex: "0 0 33.333333%",
    margin: "5px",
    height: "100px",
    backgroundColor: "#F7F7F8",
    border: "1px solid #898988",
    padding: "1rem",
  };
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "3rem",
        marginBottom: "4rem",
      }}
    >
      <section
        style={{
          ...pageTitleStyle,
          marginBottom: "1rem",
        }}
      >
        Try MetaGymLand Minigames{" "}
        <StarFilledIcon style={{ color: "#FFBE59" }} />
      </section>
      <section
        style={{
          marginBottom: "4rem",
          ...descriptionStyle,
        }}
      >
        Progress with unlocked games to unlock the locked ones
      </section>
      <section
        style={{
          ...descriptionStyle,
          marginBottom: "15rem",
          padding: "0 5rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <div
            key={"gym_room"}
            style={{
              ...itemStyle,
              ...lockingStyle(unlocked),
            }}
          >
            <Link to="/play-setup">Gym Room</Link>
            &nbsp;&nbsp;
            <UnlockFilledIcon style={{ color: "#4290FC" }} />
          </div>
          {MINI_GAMES.map((g) => {
            const link = `/play-setup/${g}`;
            return (
              <div
                key={g}
                style={{
                  ...itemStyle,
                  ...lockingStyle(unlocked),
                }}
              >
                <Link to={link}>{miniGamesMapping.get(g) ?? ""}</Link>
                &nbsp;&nbsp;
                {unlocked ? (
                  <UnlockFilledIcon style={{ color: "#4290FC" }} />
                ) : (
                  <LockFilledIcon />
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
