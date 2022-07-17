import { FunctionComponent } from 'react';
import './overall-statistics.component.scss';
import { OverallStats } from '../../../models/OverallStats';

interface OverallStatisticsProps {
  overallStats: OverallStats;
}

export const OverallStatisticsComponent: FunctionComponent<OverallStatisticsProps> = props => {
  return (
    <>
      <div>
        Cost Basis: {props.overallStats.costBasis?.amount}
        {props.overallStats.costBasis?.currency}
      </div>
      <div>
        Current Portfolio Value: {props.overallStats.currentPortfolioValue?.amount}
        {props.overallStats.currentPortfolioValue?.currency}
      </div>
    </>
  );
};
