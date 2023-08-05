import { SummaryByDates } from "./summary-by-dates";

export interface VehicleCounterSummaryList {
    vehicleCount: number;
    totalAmount: number;
    station: string;
    summaryByDates: SummaryByDates[]
  }