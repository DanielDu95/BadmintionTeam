import styles from "./Players.module.css";
import players from "../data/playersData";
import PlayerElement from "./PlayerElement";
import { PLAYERS_PER_PAEG } from "../data/playersData";
import { useState } from "react";
function Players() {
  const [currentPage, setCurrentPage] = useState(2);
  const showedPlayers = players.slice(
    (currentPage - 1) * PLAYERS_PER_PAEG,
    currentPage * PLAYERS_PER_PAEG
  );
  const pageIdexArray = Array.from(
    {
      length:
        players.length % PLAYERS_PER_PAEG === 0
          ? Math.floor(players.length / PLAYERS_PER_PAEG)
          : Math.floor(players.length / PLAYERS_PER_PAEG) + 1,
    },
    (_, index) => index + 1
  );
  console.log(pageIdexArray);

  return (
    <div className={styles.container} id="players">
      <h1>Players</h1>
      <div className={styles.playersContainer}>
        {showedPlayers.map((player) => (
          <PlayerElement key={player.id} player={player} />
        ))}
      </div>
      <div className={styles.pageIndexContainer}>
        {pageIdexArray.map((index) => (
          <button key={index} onClick={() => setCurrentPage(index)}>
            {index}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Players;
