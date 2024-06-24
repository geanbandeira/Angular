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
