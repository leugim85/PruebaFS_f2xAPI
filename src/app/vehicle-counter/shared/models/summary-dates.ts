export interface SummaryDates {
    date: string;
    totalByDate: TotalByDate[]
  }
  
  export interface TotalByDate {
    totalVehicles: number;
    totalAmount: number;
  }