import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        Wiliot
        <p>Text</p>
      </div>
    </div>
  );
}

export default Header;
