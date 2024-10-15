import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ExpenseService } from '../../services/expense.service';
import { Expense } from '../../models/expense';
import { MatDialogModule } from '@angular/material/dialog';
 
@Component({
  selector: 'app-add-expense-dialog',
  templateUrl: './add-expense-dialog.component.html',
  styleUrls: ['./add-expense-dialog.component.scss']
})
export class AddExpenseDialogComponent {
  expense: Expense = new Expense();
 
  constructor(
    private expenseService: ExpenseService,
    public dialogRef: MatDialogRef<AddExpenseDialogComponent>
  ) {}
 
  saveExpense() {
    const storedUserId = localStorage.getItem('userId');
    const userId = storedUserId ? +storedUserId : 0; // Safely convert to number or use a default

    this.expenseService.createExpense(userId, this.expense).subscribe(response => {
      this.dialogRef.close(response);
    });
  }

 
  closeDialog() {
    this.dialogRef.close();
  }
}