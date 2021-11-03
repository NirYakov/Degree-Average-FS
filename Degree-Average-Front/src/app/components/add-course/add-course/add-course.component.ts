import { Component, OnInit } from '@angular/core';
import { ICourse } from 'src/app/models/ICourse';
import { CoursesService } from 'src/app/services/courses.service';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {


  numbers: number[] = Array(12).fill(0).map((x, i) => i + 1); // [0|,1,2,3,4]; >> [1,2,3,4,5 ... 12]

  semesters = ['A', 'B', 'C'];

  selectedSemester = this.semesters[0];
  selectedYear = this.numbers[0];

  defaultMark = 80;
  defaultPoints = 4;
  defaultSemester = this.semesters[0];
  defaultYear = this.numbers[0];

  courseForm = new FormGroup({
    course: new FormControl(null, Validators.required),
    mark: new FormControl(this.defaultMark, Validators.required),
    points: new FormControl(this.defaultPoints, Validators.required),
    semester: new FormControl(this.defaultSemester, Validators.required),
    year: new FormControl(this.defaultYear, Validators.required),

  });

  constructor(private courseService: CoursesService) { }

  ngOnInit() {
    // this.numbers = Array(12).fill(0).map((x,i)=>i); // [0,1,2,3,4]
  }


  foo() {
    const course: ICourse =
    {
      course: "Lol",
      mark: 17,
      points: 7,
      semester: "C",
      year: "1"
    };
    this.courseService.addCourse(course);
  }

  addTheCourse() {
    // this.courseService.addCourse();
  }

  onSubmit() {

    if (this.courseForm.valid) {
      const course: ICourse = this.courseForm.value;
      // console.warn(course);

      if (this.courseService.data.findIndex(n => n.course === course.course)) {
        this.courseService.addCourse(course);
        console.log("added : ", course);
      }else 
      {
        console.log("this course name already exist !!", course);

      }

    }
    else {
      console.error("Not All Fields Filled!");
    }
  }

}
