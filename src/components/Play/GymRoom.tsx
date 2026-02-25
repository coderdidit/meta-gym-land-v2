import React, { useState, useEffect, useContext } from "react";
import { MiniGameCtx } from "index";
import PoseDetWebcam from "components/Webcam/PoseDetWebcam";
import SideMenu from "./GymRoomSideMenu";
import { getGameConfig, preBoot } from "games/game";
import { createMockUser } from "../../types/user";
import PhaserGame from "./PhaserGame";

type PhaserGameConfig = Phaser.Types.Core.GameConfig | undefined;

const GymRoom = ({
  avatar,
  useWebcam = true,
  miniGameId = null,
}: {
  avatar: any;
  useWebcam: boolean;
  miniGameId: string | null;
}) => {
  // run game
  // Keep undefined at start to avoid immediate mount before preBoot data is ready.
  const [config, setConfig] = useState(undefined as PhaserGameConfig);
  const { setMinigame } = useContext(MiniGameCtx);
  // Use mock user instead of Moralis user
  const user = createMockUser();

  const startGame = () => {
    if (miniGameId) {
      setMinigame(miniGameId);
    }

    const ionGameConfig = {
      ...getGameConfig(),
      callbacks: {
        preBoot: (game: Phaser.Game) => {
          preBoot({
            game,
            avatar,
            setMinigame,
            pickedMiniGame: miniGameId,
            user,
          });
        },
      },
    } as PhaserGameConfig;
    setConfig(ionGameConfig);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      startGame();
    }, 100);
    return () => {
      clearTimeout(timeout);
    };
  }, [avatar, miniGameId]);

  return (
    <PhaserGame
      config={config}
      id="phaser-app"
      style={{
        position: "absolute",
        top: "0px",
        bottom: "0px",
        width: "100%",
        height: "100%",
        zIndex: "1",
      }}
    >
      <SideMenu />

      {useWebcam && (
        <div
          style={{
            position: "fixed",
            top: "1%",
            left: "45%",
            bottom: "0px",
          }}
        >
          <PoseDetWebcam
            sizeProps={{
              width: "220px",
              height: "auto",
              borderRadius: "14px",
            }}
            styleProps={{
              boxShadow: "0 0 10px 2px #202020",
            }}
          />
        </div>
      )}
    </PhaserGame>
  );
};

export default GymRoom;
