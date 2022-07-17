import { MoneyValue } from '../models/MoneyValue';

export const getMoneyString = (moneyValue: MoneyValue): string =>
  `${moneyValue?.amount.toFixed(2)} ${moneyValue?.currency}`;
