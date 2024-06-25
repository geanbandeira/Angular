import {Component, OnInit} from '@angular/core';
import { FinancialService } from '../financial.service';

@Component({
  selector:'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  expensesData: any;
  incomeData: any;
  financialPlan: any;

constructor(private financialService: FinancialService){}

ngOnInit(): void {
  this.financialService.getExpenses().subscribe
this.financialService.getExpenses().subscribe (data => {
this.expensesData = data;
});
this.financialService.getIncome().subscribe(data => {
this.incomeData;
});
this.financialService.getFinancialPLan().subscrive(data => {
this.financialPlan = data;
});
}
}
