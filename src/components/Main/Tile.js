import styles from './Main.module.css';

function Tile(props) {
  const {id, value} = props

  return (
    <div className={styles.tile}>
      <div className={styles.tileTitle}>
        ID {id}
      </div>
      <div className={styles.tileValue}>
        Temp: {value} C
      </div>
    </div>
  );
}

export default Tile;
