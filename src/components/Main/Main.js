import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import Tile from './Tile'
import {getChartOptions} from './getChartOptions'

import styles from './Main.module.css';

import {useServer} from '../../hooks'

function Main() {
  const data = useServer()
  const lastRecord = data[data.length - 1]

  const chartOptions = getChartOptions(data);
  console.log(chartOptions)

  return (
    <div className={styles.main}>
      <div className={styles.tiles}>
        {lastRecord?.map(record => {
          return (
            <Tile
              key={record.id}
              id={record.id}
              value={record.temperature}
            />
          )
        })}
      </div>
      <div className={styles.chart}>
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      </div>
    </div>
  );
}

export default Main;
