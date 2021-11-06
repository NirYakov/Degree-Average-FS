import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CoursesService } from 'src/app/services/courses.service';
import { round2AfterThePoint, showWith2PointsAfterDecimal } from 'src/app/utills/SomeUtills';

@Component({
  selector: 'app-info-data',
  templateUrl: './info-data.component.html',
  styleUrls: ['./info-data.component.css']
})
export class InfoDataComponent implements OnInit {

  points: number = 0;
  average: number = 0;
  averageChanged: number = 0;

  subject! : Subject<number>;

  constructor(private coursesService: CoursesService) {
    // const markVal = this.coursesService.markValue;
    this.points = this.coursesService.points;
    this.average = this.coursesService.average;
    this.average = round2AfterThePoint(this.average);

    
    this.averageChanged = this.average;
    
   // this.subject = coursesService.numberAverageSubject.subscribe(value => {});
  coursesService.numberAverageSubject.subscribe(value => { this.averageChanged = value; });
  coursesService.averageSubject.subscribe(value => { this.average = value; });
  }

  ngOnInit() {
  }


  showWith2PointsAfterDecimal(num : number) 
  {
    return showWith2PointsAfterDecimal(num);
  }


}
