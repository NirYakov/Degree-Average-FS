import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ICourse } from 'src/app/models/ICourse';
import { CoursesService } from 'src/app/services/courses.service';
import { titleCase } from 'src/app/utills/SomeUtills';





@Component({
  selector: 'app-table-courses',
  templateUrl: './table-courses.component.html',
  styleUrls: ['./table-courses.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TableCoursesComponent implements AfterViewInit {

  columnsToDisplay = ['course', 'mark', 'points', 'year', 'semester'];
  dataSource : MatTableDataSource< ICourse>;  // ICourse[] = [];
  expandedElement: ICourse | null = null;


  @ViewChild(MatSort) sort!: MatSort;

  // sort: MatSort = new MatSort();

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;

  }

  constructor(private courseService: CoursesService) {

    this.dataSource = new MatTableDataSource (this.courseService.data);
    //    <button mat-stroked-button color="primary" (click)="foo()">Primary</button>



  }

  ConvertToTitleCase(str: string) {
    return titleCase(str);
  }

  deleteCourse(index: number) {
   // this.dataSource = this.courseService.deleteCourseByIndex(index);

  }

  announceSortChange() 
  {
    console.log("Sorting ... ???");

    // this.dataSource.sortData(  this.dataSource.data ,this.sort );

  }

}