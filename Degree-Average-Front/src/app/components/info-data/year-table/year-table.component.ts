

import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ICourse } from 'src/app/models/ICourse';
import { CoursesService } from 'src/app/services/courses.service';
import { showWith2PointsAfterDecimal, titleCase } from 'src/app/utills/SomeUtills';

@Component({
  selector: 'app-year-table',
  templateUrl: './year-table.component.html',
  styleUrls: ['./year-table.component.css']
})
export class YearTableComponent implements OnInit, AfterViewInit {

  numbersYears: number[] = [2, 3, 4];
  selectedYear = 0;

  year: FormControl;

  courses: ICourse[];
  yearAverage = 0;

  columnsToDisplay = ['course', 'mark', 'points', 'year', 'semester'];
  dataSource: MatTableDataSource<ICourse> = new MatTableDataSource<ICourse>([]);  // ICourse[] = [];
  @ViewChild(MatSort) sort!: MatSort;


  //@ViewChild(MatPaginator) paginator!: MatPaginator;
  //expandedElement: ICourse | null = null;


  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    // this.dataSource.paginator = this.paginator;

  }

  // yearNumber : 0;

  scores = new Map<number, [number, number]>();
  markPlace = 0;
  pointsPlace = 1;

  constructor(private courseService: CoursesService) {

    this.selectedYear = 1;
    const numbersYearsSet = new Set<number>();



    // this.scores = new Map<number, [number,number]>();

    this.courses = this.courseService.getAllCourses();
    this.courses.forEach(c => {
      const yearInNumber = +c.year;
      numbersYearsSet.add(yearInNumber);

      const value = this.scores.get(yearInNumber) || [0, 0];
      this.scores.set(yearInNumber, [value[this.markPlace] + (c.mark * c.points), value[this.pointsPlace] + c.points]);
      //   toCheckSet[yearInNumber] = toCheckSet[yearInNumber].average + c.mark || 0;
    });

    this.numbersYears = [...numbersYearsSet];
    this.numbersYears.sort();
    this.selectedYear = this.numbersYears[0];
    this.year = new FormControl(this.selectedYear, Validators.required);



    this.getTheDataSource();

    console.log("scores : ", this.scores);

    const yearMarkPoints = this.scores.get(this.selectedYear) || [0, 0];
    this.yearAverage = yearMarkPoints[this.markPlace] / yearMarkPoints[this.pointsPlace];


    this.year.valueChanges.subscribe(val => {
      this.getTheDataSource();
    });

  }


  getTheDataSource() {
    const coursesByYear = this.courses.filter(c => (+c.year) == this.selectedYear);
    this.dataSource = new MatTableDataSource(coursesByYear);
    this.dataSource.sort = this.sort;
    const yearMarkPoints = this.scores.get(this.selectedYear) || [0,0];
    this.yearAverage = yearMarkPoints[this.markPlace] / yearMarkPoints[this.pointsPlace];
  }

  ngOnInit() {
  }


  ConvertToTitleCase(str: string) {
    return titleCase(str);
  }


  announceSortChange() {
    console.log("Sorting ... ???");

    // this.dataSource.sortData(  this.dataSource.data ,this.sort );

  }

  showWith2PointsAfterDecimal(num : number) 
  {
    return showWith2PointsAfterDecimal(num);
  }

}
