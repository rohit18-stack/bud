import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExpenseService } from '../../services/expense.service';
import { Expense } from '../../models/expense';
import { AddExpenseDialogComponent } from '../add-expense-dialog/add-expense-dialog.component';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  expenses: Expense[] = [];
  userId: number = 0;
  displayedColumns: string[] = ['description', 'amount', 'category', 'date'];
 
  constructor(private expenseService: ExpenseService, public dialog: MatDialog) { }
 
  ngOnInit(): void {
    const storedUserId = localStorage.getItem('userId');
    this.userId = storedUserId ? +storedUserId : 0; // Safely convert to number
    this.loadExpenses();
  }
 
  loadExpenses() {
    this.expenseService.getExpenses(this.userId).subscribe(response => {
      this.expenses = response;
    });
  }
 
  openAddExpenseDialog() {
    const dialogRef = this.dialog.open(AddExpenseDialogComponent);
 
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.expenses.push(result);
        this.expenses = [...this.expenses]; // Refresh the table
      }
    });
  }
}