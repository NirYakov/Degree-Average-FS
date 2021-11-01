import { Component, OnInit } from '@angular/core';
import { ICourse } from 'src/app/models/ICourse';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  constructor(private courseService : CoursesService ) { }

  numbers : number[] = [];

  ngOnInit() {
    this.numbers = Array(12).fill(0).map((x,i)=>i); // [0,1,2,3,4]
  }

  
  foo()
  {
    const course :ICourse = 
    {
      course: "Lol",
      mark: 77,
      points: 7,
      semester: "C",
      year: "1"
    };
    this.courseService.addCourse(course);
  }

  addTheCourse() 
  {
    // this.courseService.addCourse();
  }

}
