import { FunctionComponent } from 'react';
import './statistics.component.scss';
import OverallStatistics from './OverallStatistics';
import CoinStatistics from './CoinStatistics';

export const StatisticsComponent: FunctionComponent = () => {
  return (
    <>
      <OverallStatistics></OverallStatistics>
      <CoinStatistics></CoinStatistics>
    </>
  );
};
