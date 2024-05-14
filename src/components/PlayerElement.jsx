import styles from "./PlayerElement.module.css";
function PlayerElement({ player }) {
  return (
    <div className={styles.playerBox}>
      <img src={player.image} alt={player.name} />
      <div className={styles.text}>
        <p>NAME: {player.name}</p>
        <p>AGE: {player.age}</p>
        <p>PROFESSION: {player.profession}</p>
      </div>
    </div>
  );
}

export default PlayerElement;
