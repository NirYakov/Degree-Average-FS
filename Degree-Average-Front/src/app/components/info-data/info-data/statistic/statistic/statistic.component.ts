import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ICourse } from 'src/app/models/ICourse';
import { CoursesService } from 'src/app/services/courses.service';
import { round0AfterThePoint } from 'src/app/utills/SomeUtills';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {

  averageControl: FormControl;
  value = 2.5;

  numberThreePoints: number = 0;
  numberFourPoints: number = 0;
  numberFivePoints: number = 0;
  numberFreePoints: number = 0;

  // emailFormControl

  firstDeltaCourse: string = "n/a";
  secondDeltaCourse: string = "n/a";

  emailFormControl = new FormControl(2.0, [
    Validators.required,
  ]);

  // matcher = new MyErrorStateMatcher();
  avrg: number = 0;

  courses: ICourse[];

  constructor(private coursesService: CoursesService) {
    this.value = 4.5;

    this.avrg = coursesService.average;
    this.averageControl = new FormControl(this.avrg, [
      Validators.required,
    ]);

    this.courses = coursesService.getAllCourses();


  }

  ngOnInit() {

    this.numberFreePoints = this.numberThreePoints = this.numberFourPoints
      = this.numberFivePoints = round0AfterThePoint(this.avrg);

    //   this.averageControl.get('fieldName')
    // .valueChanges
    // .pipe(pairwise())
    // .subscribe(([prev, next]: [any, any]) => ... );

    this.averageControl.valueChanges.subscribe(val => {
      const mark = val;
      this.numberFivePoints = this.ReachAvrg(mark, 5);
      this.numberFourPoints = this.ReachAvrg(mark, 4);
      this.numberThreePoints = this.ReachAvrg(mark, 3);
      this.numberFreePoints = this.ReachAvrg(mark, this.emailFormControl.value);
    });

    this.BestCourses();
  }

  BestCourses() {
    const length = this.courses.length

    if (length >= 2) {
      this.courses.sort((x: ICourse, y: ICourse) => {
        const xDelta = this.deltaCal(x);
        const yDelta = this.deltaCal(y);
        return xDelta - yDelta;
      });
      this.firstDeltaCourse = this.courses[length - 1].course;
      this.secondDeltaCourse = this.courses[length - 2].course;

    } else if (this.courses.length == 1) {
      this.firstDeltaCourse = this.courses[0].course;
    }

  }

  deltaCal(element: ICourse) {
    return ((100 - element.mark) * (element.points));
  }

  logit() {

    console.log("Value : ", this.value);
    console.log("emailFormControl : ", this.emailFormControl);
    this.numberThreePoints += 1;
  }

  ReachAvrg(i_WantedMark: number, i_GivenPoints: number) {

    let number = 0;
    // this.numberFivePoints = 3 * val  * 0.5;
    // this.numberFourPoints++;
    // this.numberThreePoints--;

    const markTotal = this.coursesService.markValue;

    let totalRightSide = (i_WantedMark * (this.coursesService.points + i_GivenPoints)) - markTotal;

    let answer;

    if (i_GivenPoints > 0) {
      answer = totalRightSide / i_GivenPoints;
    }
    else {
      answer = 0;
    }

    number = answer;

    return round0AfterThePoint(number);
  }

}

