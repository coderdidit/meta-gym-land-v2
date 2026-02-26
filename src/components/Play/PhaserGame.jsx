import { useLayoutEffect, useRef } from "react";
import Phaser from "phaser";

const PhaserGame = ({ config, id, style, children }) => {
  const containerRef = useRef(null);
  const gameRef = useRef();

  useLayoutEffect(() => {
    if (!config || !containerRef.current) {
      return;
    }

    gameRef.current = new Phaser.Game({
      ...config,
      parent: containerRef.current,
    });

    return () => {
      if (gameRef.current) {
        gameRef.current.destroy(true);
        gameRef.current = undefined;
      }
    };
  }, [config]);

  return (
    <div id={id} ref={containerRef} style={style}>
      {children}
    </div>
  );
};

export default PhaserGame;
