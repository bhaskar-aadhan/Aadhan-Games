import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { Tile as TileModel } from "./models/tile";
import styles from "./styles/board.module.css";
import Tile from "./tile";
import { GameContext } from "./context/game-context";
import MobileSwiper, { SwipeInput } from "./mobile-swiper";
import { Modal } from '../Modals';

export default function Board() {
  const { getTiles, moveTiles, startGame } = useContext(GameContext);
  const initialized = useRef(false);
  const [open, setOpen] = useState(false)

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      // disables page scrolling with keyboard arrows
      e.preventDefault();

      switch (e.code) {
        case "ArrowUp":
          moveTiles("move_up");
          break;
        case "ArrowDown":
          moveTiles("move_down");
          break;
        case "ArrowLeft":
          moveTiles("move_left");
          break;
        case "ArrowRight":
          moveTiles("move_right");
          break;
      }
    },
    [moveTiles],
  );

  const handleSwipe = useCallback(
    ({ deltaX, deltaY }: SwipeInput) => {
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX > 0) {
          moveTiles("move_right");
        } else {
          moveTiles("move_left");
        }
      } else {
        if (deltaY > 0) {
          moveTiles("move_down");
        } else {
          moveTiles("move_up");
        }
      }
    },
    [moveTiles],
  );

  const renderGrid = () => {
    const cells: JSX.Element[] = [];
    const totalCellsCount = 16;

    for (let index = 0; index < totalCellsCount; index += 1) {
      cells.push(<div className={styles.cell} key={index} />);
    }

    return cells;
  };

  const renderTiles = () => {
    console.log("tiles: ", getTiles())
    return getTiles().map((tile: TileModel) => (
      <Tile key={`${tile.id}`} {...tile} />
    ));
  };

  useEffect(() => {
    if (initialized.current === false) {
      startGame();
      initialized.current = true;
    }
  }, [startGame]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  useEffect(() => {
    if (getTiles().length === 16) {
      setOpen(true)
    }
  }, [getTiles])

  return (
    <MobileSwiper onSwipe={handleSwipe}>
      <div className={styles.board}>
        <div className={styles.tiles}>{renderTiles()}</div>
        <div className={styles.grid}>{renderGrid()}</div>
      </div>
    </MobileSwiper>
  );
}
