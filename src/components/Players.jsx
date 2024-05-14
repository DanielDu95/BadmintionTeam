import styles from "./Players.module.css";
import players from "../data/playersData";
import PlayerElement from "./PlayerElement";
function Players() {
  console.log(players);
  return (
    <div className={styles.container}>
      <h1>Players</h1>
      <div className={styles.playersContainer}>
        {players.map((player) => (
          <PlayerElement key={player.id} player={player} />
        ))}
      </div>
    </div>
  );
}

export default Players;
