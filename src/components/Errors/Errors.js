import { useErrors } from './ErrorProvider';
import styles from './Errors.module.css';

function Errors() {
  const {errors} = useErrors();

  return (
    <div className={styles.errors}>
      {errors.map((error, i) => (
        <div key={i} className={styles.error}>
          {error.message}
        </div>
      ))}
    </div>
  );
}

export default Errors;
