import React, { useEffect } from "react";

import styles from "./SearchPanel.module.scss";
import GameLabel from "../GameLabel";
import { useDispatch, useSelector } from "react-redux";
import { setGames, clear, getGames } from "../../redux/slices/searchSlice";

function SearchPanel() {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(clear());
    // dispatch(
    //   addGame({
    //     name: "valavshonok",
    //     rating: 1234,
    //     timeControl: { base: 5, delta: 3 },
    //     mode: 0,
    //   })
    // );
    // dispatch(
    //   addGame({
    //     name: "The_Andrey",
    //     rating: 1234,
    //     timeControl: { base: 5, delta: 3 },
    //     mode: 0,
    //   })
    // );
    // dispatch(
    //   addGame({
    //     name: "Kosse",
    //     rating: 1200,
    //     timeControl: { base: 2, delta: 2 },
    //     mode: 1,
    //   })
    // );
    // dispatch(
    //   addGame({
    //     name: "Oracle",
    //     rating: 1800,
    //     timeControl: { base: 5, delta: 0 },
    //     mode: 1,
    //   })
    // );
    // dispatch(
    //   addGame({
    //     name: "Lix",
    //     rating: 1600,
    //     timeControl: { base: 3, delta: 5 },
    //     mode: 0,
    //   })
    // );
    // dispatch(
    //   addGame({
    //     name: "gorodmi",
    //     rating: 1500,
    //     timeControl: { base: 5, delta: 3 },
    //     mode: 1,
    //   })
    // );
    setInterval(() => {
      dispatch(getGames({}));
    }, 500);
  }, []);

  const games = useSelector((state) => state.searchSlice.games);

  return (
    <div className={styles.root}>
      {games.map((game, id) => (
        <GameLabel
          name={game.name}
          rating={game.rating}
          timeControl={{ base: game.initTime, delta: game.deltaTime }}
          mode={game.mode}
          gameID={game.id}
          key={id}
        />
      ))}
    </div>
  );
}

export default SearchPanel;
