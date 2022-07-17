import { FunctionComponent } from 'react';
import { CoinStats } from '../../../models/CoinStats';
import { MoneyValue } from '../../../models/MoneyValue';
import './coin-statistics.component.scss';

interface CoinStatisticsProps {
  coinStats: CoinStats[];
}

export const CoinStatisticsComponent: FunctionComponent<CoinStatisticsProps> = props => {
  const getMoneyString = (moneyValue: MoneyValue): string => `${moneyValue.amount.toFixed(2)} ${moneyValue.currency}`;

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Coin Code</th>
            <th>Coin Name</th>
            <th>Shares</th>
            <th>Market Price</th>
            <th>Average Invested Price</th>
            <th>Current Value</th>
            <th>diff</th>
            <th>diff (%)</th>
          </tr>
        </thead>
        <tbody>
          {props.coinStats.map(coinStat => (
            <tr key={coinStat.coinCode}>
              <td>{coinStat.coinCode}</td>
              <td>{coinStat.coinName}</td>
              <td>{coinStat.shares.toFixed(8)}</td>
              <td>{getMoneyString(coinStat.currentMarketPrice)}</td>
              <td>{getMoneyString(coinStat.averageInvestedPrice)}</td>
              <td>{getMoneyString(coinStat.currentValue)}</td>
              <td>{getMoneyString(coinStat.differenceAbsolute)}</td>
              <td>{coinStat.differencePercentage.toFixed(2)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
