import { Component, OnInit } from '@angular/core';
import { IndexService } from '../index.service';
import { Employees } from '../interface/Ihome-page-interface';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  /**
   * Useed to display column on grid.
   * @type {string[]}
   * @memberof HomePageComponent
   */
  displayedColumns: string[] = ['empNo', 'name', 'last'];

  /**
   * Used for loading data.
   * @type {*}
   * @memberof HomePageComponent
   */
  dataSource: any

  constructor(private homeService: IndexService) { }

  /**
   * Used for column names.
   * @type {string[]}
   * @memberof HomePageComponent
   */
  employeesColumn: string[] = ['empNo', 'name', 'last'];

  /**
   * Used fro employee array.
   * @type {Employees[]}
   * @memberof HomePageComponent
   */
  employees: Employees[] = [];

  /**
   * variables used for search key.
   * @type {*}
   * @memberof HomePageComponent
   */
  searchKey: any;

  ngOnInit(): void {
    //Used for subscribe and getting the values from json.
    this.homeService.getEmployees().subscribe(res => {
      this.employees = res;
      this.dataSource = new MatTableDataSource(this.employees);
    })
  }

  /**
   * Method used for search on input field.
   * @memberof HomePageComponent
   */
  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  /**
   * Method used for search field.
   * @memberof HomePageComponent
   */
  applyFilter() {
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }
}
