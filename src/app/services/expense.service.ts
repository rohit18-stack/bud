import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Expense } from '../models/expense';
 
@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private apiUrl = 'http://localhost:8080/api/users';
 
  constructor(private http: HttpClient) { }
 
  getExpenses(userId: number): Observable<Expense[]> {
    return this.http.get<Expense[]>(`${this.apiUrl}/${userId}/expenses`);
  }
 
  createExpense(userId: number, expense: Expense): Observable<Expense> {
    return this.http.post<Expense>(`${this.apiUrl}/${userId}/expenses`, expense);
  }
}
