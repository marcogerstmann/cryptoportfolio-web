import { FunctionComponent } from 'react';
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
      <div>
        Difference (absolute): {props.overallStats.differenceAbsolute?.amount}
        {props.overallStats.differenceAbsolute?.currency}
      </div>
      <div>
        Difference (%): {props.overallStats.differencePercentage}%
      </div>
    </>
  );
};
