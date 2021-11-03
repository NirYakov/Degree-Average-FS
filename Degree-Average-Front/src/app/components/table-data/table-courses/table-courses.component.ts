import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
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
  dataSource: MatTableDataSource<ICourse>;  // ICourse[] = [];
  expandedElement: ICourse | null = null;


  @ViewChild(MatSort) sort!: MatSort;


  markControl: FormControl;

  lastValue = 0;

  // sort: MatSort = new MatSort();

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

  }

  constructor(private courseService: CoursesService) {

    this.dataSource = new MatTableDataSource(this.courseService.data);
    //    <button mat-stroked-button color="primary" (click)="foo()">Primary</button>
    this.dataSource.paginator = this.paginator;

    this.markControl = new FormControl(100, [
      Validators.required,
    ]);


    // this.markControl.valueChanges.subscribe(val => {
    //  // this.markControlValChange(val);

    //   // this.numberFivePoints = this.ReachAvrg(mark, 5);
    // });

  }

  markControlValChange(val: any) {
    // console.log("expandedElement : ", this.expandedElement);
    console.log("val mark Control : ", val);



  }

  ConvertToTitleCase(str: string) {
    return titleCase(str);
  }

  // deleteCourse(index: number) {
  //  // this.dataSource = this.courseService.deleteCourseByIndex(index);

  // }

  //   deleteCourse(course: ICourse) { // not seen right away the change \ deleted
  //     // this.dataSource = this.courseService.deleteCourseByIndex(index);
  //     const index = this.dataSource.data.findIndex(c => c.course == course.course);
  //     this.dataSource.data.splice(index, 1);

  //  //   this.dataSource.data.splice(index, 1);

  //   }


  @ViewChild(MatPaginator) paginator!: MatPaginator;


  deleteCourse(course: ICourse) {
    // this.dataSource = this.courseService.deleteCourseByIndex(index);
    // const index = this.dataSource.data.findIndex(c => c.course == course.course);

    this.courseService.deleteCourseByCourse(course);

    // this.courseService.data.splice(index, 1);
    // this.dataSource = new MatTableDataSource(this.courseService.data); // SOLVED !!

    // this.dataSource.data
    this.dataSource.paginator = this.paginator;


    // this.dataSource.data

    //  this.dataToDisplay = this.dataToDisplay.slice(0, -1);
    //this.dataSource.data. setData(this.dataToDisplay);

    console.log("Here : And some deleted ... ");
  }

  announceSortChange() {
    console.log("Sorting ... ???");

    // this.dataSource.sortData(  this.dataSource.data ,this.sort );

  }

  // expandedElementSame : ICourse | null = null;

  editCourse(course: ICourse) {

    if (this.expandedElement) {
      const number = this.markControl.value;

      this.markControlValChange(number);
      console.log(" this.expandedElement :", this.expandedElement);

      this.courseService.calculateNewAverageChanged(number, this.expandedElement.points, this.expandedElement.mark);
    }
  }

  expentedAction(element: any) {
    let result = 'collapsed';

    if (element == this.expandedElement) {

      result = 'expanded';
      // this.markControlValChange(100);

      // if (this.expandedElementSame !== this.expandedElement) 
      // {

      //  }

      // if (this.lastValue !== this.markControl.value) {
      //   // this.markControlValChange(this.markControl.value);
      //   this.lastValue = this.markControl.value;

      //   console.log("EXPENTED !! ", this.lastValue);
      // }

      // this.markControlValChange(this.markControl.value);


      // element == this.expandedElement ? 'expanded' : 'collapsed' // this what was in the stuffs
    }

    return result;
  }

}