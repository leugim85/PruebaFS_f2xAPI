import { Component, OnInit } from '@angular/core';
import { GeneralSummary } from '../../shared/models/general-sumary';
import { SummaryByDates } from '../../shared/models/summary-by-dates';
import { SummaryDates, TotalByDate } from '../../shared/models/summary-dates';
import { ReporterService } from '../../shared/services/reporter.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-counter-reporter',
  templateUrl: './counter-reporter.component.html',
  styleUrls: ['./counter-reporter.component.css'],
})
export class CounterReporterComponent implements OnInit {
  displayedColumns: string[] = [];
  dataSource!: GeneralSummary;
  dates: string[] = [];
  summaryByDates: SummaryByDates[] = [];
  summaryDates: SummaryDates[] = [];
  station: string = '';
  showReport: boolean = false;
  constructor(private reporterService: ReporterService,
              private toastr: ToastrService) {}

  ngOnInit(): void {
    this.initializeData();
  }

  initializeData() {
    this.displayedColumns = [];
    this.summaryByDates = [];
    this.reporterService.getSummaryReport(this.station).subscribe(resp => {
      if(resp.vehicleCounterSummaryList.length){
        this.dataSource = resp;
        this.initializeColums();
        this.initializeSummaryByDates();
      } else {
        this.showInfo()
      }
    });
  }

  initializeColums() {
    this.dataSource.vehicleCounterSummaryList.forEach((e) => {
      this.displayedColumns.push(e.station);
    });
  }

  initializeSummaryByDates() {
    this.dataSource.vehicleCounterSummaryList.forEach((d) => {
      d.summaryByDates.forEach((s) => {
        this.summaryByDates.push(s);
      });
    });
    this.cleanData();
  }

  cleanData() {
    this.summaryByDates.reduce<SummaryDates[]>((result, current) => {
      const existingEntry = result.find((item) => item.date === current.date);

      if (existingEntry) {
        let summaryDates: TotalByDate = {
          totalAmount: current.totalAmountByDate,
          totalVehicles: current.vehicleCountByDate,
        };
        existingEntry.totalByDate.push(summaryDates);
      } else {
        let summaryDates: TotalByDate = {
          totalAmount: current.totalAmountByDate,
          totalVehicles: current.vehicleCountByDate,
        };
        result.push({
          date: current.date,
          totalByDate: [summaryDates],
        });
      }

      this.summaryDates = result;
      return result;
    }, []);
  }

  showInfo() {
    this.toastr.info('No se han encontrado resultados!');
  }
}
