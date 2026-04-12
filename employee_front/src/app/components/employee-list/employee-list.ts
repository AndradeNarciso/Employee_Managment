import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Employee } from '../../employee';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../../service/employee-service';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList implements OnInit {
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService, private cdr: ChangeDetectorRef) { }


  ngOnInit(): void {
    this.getEmployeeComponents();

  }

  private getEmployeeComponents() {
    this.employeeService.getEmployees().subscribe({
      next: (data) => {

        this.employees = data;
        this.cdr.detectChanges();

      },
      error: (err) => {
        console.error(`An arror happne: ${err}`)
      }
    })
  }
}
