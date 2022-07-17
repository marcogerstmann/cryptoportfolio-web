import { FunctionComponent } from 'react';
import './coin-statistics.component.scss';
import { CoinStats } from '../../../models/CoinStats';

interface CoinStatisticsProps {
  coinStats: CoinStats[];
}

export const CoinStatisticsComponent: FunctionComponent<CoinStatisticsProps> = props => {
  return (
    <>
      {props.coinStats.map(coinStat => (
        <div key={coinStat.coinCode}>{coinStat.coinName}</div>
      ))}
    </>
  );
};
