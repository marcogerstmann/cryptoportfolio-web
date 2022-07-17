import { FunctionComponent } from 'react';
import { OverallStats } from '../../../models/OverallStats';
import { getMoneyString } from '../../../util/MoneyUtil';
import './overall-statistics.component.scss';

interface OverallStatisticsProps {
  overallStats: OverallStats;
}

export const OverallStatisticsComponent: FunctionComponent<OverallStatisticsProps> = props => {
  const getPositiveNegativeClassName = (value: number) => {
    if (value === 0) {
      return '';
    }
    return value > 0 ? 'positive' : 'negative';
  };

  return (
    <>
      <table className={'overall-stats'}>
        <tbody>
          <tr>
            <td>Cost Basis:</td>
            <td>{getMoneyString(props.overallStats.costBasis)}</td>
          </tr>
          <tr>
            <td>Current Portfolio Value:</td>
            <td>{getMoneyString(props.overallStats.currentPortfolioValue)}</td>
          </tr>
          <tr>
            <td>Difference (absolute):</td>
            <td className={getPositiveNegativeClassName(props.overallStats.differenceAbsolute?.amount)}>
              {getMoneyString(props.overallStats.differenceAbsolute)}
            </td>
          </tr>
          <tr>
            <td>Difference (%):</td>
            <td className={getPositiveNegativeClassName(props.overallStats.differencePercentage)}>
              {props.overallStats.differencePercentage?.toFixed(2)}%
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
