import { MoneyValue } from './MoneyValue';

export interface CoinStats {
  coinCode: string;
  coinName: string;
  currentMarketPrice: MoneyValue;
  shares: number;
  costBasis: MoneyValue;
  currentValue: MoneyValue;
  averageInvestedPrice: MoneyValue;
  differenceAbsolute: MoneyValue;
  differencePercentage: number;
}
