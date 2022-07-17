import { FunctionComponent, useEffect, useState } from 'react';
import './statistics.component.scss';
import OverallStatistics from './OverallStatistics';
import CoinStatistics from './CoinStatistics';
import { OverallStats } from '../../models/OverallStats';
import { CoinStats } from '../../models/CoinStats';

export const StatisticsComponent: FunctionComponent = () => {
  const [overallStats, setOverallStats] = useState<OverallStats>({} as OverallStats);
  const [coinStats, setCoinStats] = useState<CoinStats[]>([]);

  useEffect(() => {
    fetch('http://localhost:8080/cryptoportfolio-service/1.0/portfolio/statistics')
      .then(response => response.json())
      .then(data => setOverallStats(data));

    fetch('http://localhost:8080/cryptoportfolio-service/1.0/portfolio/statistics/coin')
      .then(response => response.json())
      .then(data => setCoinStats(data));
  }, []);

  return (
    <>
      <h2>Overall Statistics</h2>
      <OverallStatistics overallStats={overallStats}></OverallStatistics>

      <h2>Coin Statistics</h2>
      <CoinStatistics coinStats={coinStats}></CoinStatistics>
    </>
  );
};
