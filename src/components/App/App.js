import Providers from '../Providers'
import Header from '../Header'
import Main from '../Main'
import Errors from '../Errors'

import styles from './App.module.css';

function App() {
  return (
    <Providers>
      <div className={styles.app}>
        <Header />
        <Main />
        <Errors />
      </div>
    </Providers>
  );
}

export default App;
