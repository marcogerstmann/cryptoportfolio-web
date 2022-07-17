import { MoneyValue } from './MoneyValue';

export interface OverallStats {
  costBasis: MoneyValue;
  currentPortfolioValue: MoneyValue;
  differenceAbsolute: MoneyValue;
  differencePercentage: number;
}
