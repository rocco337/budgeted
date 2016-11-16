export class DashboardModel {
  MonthlyStatus: MonthlyStatus;
  TopConsumers: KeyValuePair[];
}

export class MonthlyStatus {
  Spent: string;
  Left: string;
  Savings: string;
}

export class KeyValuePair {
  Key: string;
  Value: string;

  constructor(key: string, value: string) {
    this.Key = key;
    this.Value = value;
  }
}

export interface IDashboardService{
    getMonthlyStatus(): MonthlyStatus;
    getTopConsumers():KeyValuePair[];
}
