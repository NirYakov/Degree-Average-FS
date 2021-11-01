import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
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
export class TableCoursesComponent {

  columnsToDisplay = ['course', 'mark', 'points', 'year', 'semester'];
  dataSource: ICourse[] = [];
  expandedElement: ICourse | null = null;

  constructor(private courseService: CoursesService) {

    this.dataSource = this.courseService.data;
    //    <button mat-stroked-button color="primary" (click)="foo()">Primary</button>

  }

  ConvertToTitleCase(str: string) {
    return titleCase(str);
  }

  deleteCourse(index: number) {
    this.dataSource = this.courseService.deleteCourseByIndex(index);

  }
}

const ELEMENT_DATA: ICourse[] = [
  {
    course: "Prog C",
    mark: 79,
    points: 5,
    year: "1",
    semester: "A"
  },
  {
    course: "Linery",
    mark: 86,
    points: 5,
    year: "1",
    semester: "A"
  },
  {
    course: "Infi 1",
    mark: 60,
    points: 6.5,
    year: "1",
    semester: "A"
  },
  {
    course: "Infi 2",
    mark: 70,
    points: 5,
    year: "1",
    semester: "B"
  },
  {
    course: "Descret Math",
    mark: 65,
    points: 5,
    year: "1",
    semester: "B"
  },
  {
    course: "Information society",
    mark: 84,
    points: 2,
    year: "1",
    semester: "B"
  },
  {
    course: "Prog C pro",
    mark: 90,
    points: 3,
    year: "1",
    semester: "B"
  },
  {
    course: "Data structures",
    mark: 84,
    points: 4,
    year: "1",
    semester: "B"
  },
  {
    course: "Mitog",
    mark: 91,
    points: 4,
    year: "1",
    semester: "B"
  },
  {
    course: "Challenges in philosophy",
    mark: 85,
    points: 2,
    year: "1",
    semester: "C"
  },
  {
    course: "Data bases (Sql)",
    mark: 75,
    points: 4,
    year: "2",
    semester: "A"
  },
  {
    course: "Logic",
    mark: 78,
    points: 4,
    year: "2",
    semester: "A"
  },
  {
    course: "Grahp theory",
    mark: 80,
    points: 3.5,
    year: "2",
    semester: "A"
  },
  {
    course: "Assmbely",
    mark: 91,
    points: 2.5,
    year: "2",
    semester: "A"
  },
  {
    course: "C++",
    mark: 100,
    points: 5,
    year: "2",
    semester: "A"
  },
  {
    course: "Philosophy literature",
    mark: 90,
    points: 2,
    year: "2",
    semester: "A"
  },
  {
    course: "Algo A",
    mark: 83,
    points: 4,
    year: "2",
    semester: "B"
  },
  {
    course: "Operating System",
    mark: 76,
    points: 3.5,
    year: "2",
    semester: "B"
  },
  {
    course: ".Net C#",
    mark: 92,
    points: 3,
    year: "2",
    semester: "B"
  },
  {
    course: "Reshatot",
    mark: 67,
    points: 3.5,
    year: "2",
    semester: "B"
  },
  {
    course: "Philosophy in movies",
    mark: 75,
    points: 2,
    year: "2",
    semester: "C"
  },
  {
    course: "Probability",
    mark: 86,
    points: 3.5,
    year: "2",
    semester: "C"
  },
  {
    course: "Automaths",
    mark: 86,
    points: 4,
    year: "2",
    semester: "C"
  },
  {
    course: "Design patterns",
    mark: 96,
    points: 3,
    year: "3",
    semester: "A"
  },
  {
    course: "Complecity",
    mark: 63,
    points: 4,
    year: "3",
    semester: "A"
  },
  {
    course: "Logic Programing",
    mark: 98,
    points: 3,
    year: "3",
    semester: "A"
  },
  {
    course: "Machine Learning",
    mark: 97,
    points: 3.5,
    year: "3",
    semester: "A"
  },
  {
    course: "Math Tools",
    mark: 77,
    points: 5,
    year: "3",
    semester: "A"
  },
  {
    course: "DevOps",
    mark: 100,
    points: 3,
    year: "3",
    semester: "B"
  },
  {
    course: "Inovition",
    mark: 79,
    points: 2,
    year: "3",
    semester: "B"
  },
  {
    course: "Compliers",
    mark: 95,
    points: 3.5,
    year: "3",
    semester: "B"
  },
  {
    course: "Reverse engeneer",
    mark: 100,
    points: 3,
    year: "3",
    semester: "B"
  },
  {
    course: "Computer Vision",
    mark: 97,
    points: 3,
    year: "3",
    semester: "B"
  },
  {
    course: "Computer Security",
    mark: 95,
    points: 3.5,
    year: "3",
    semester: "C"
  }
];




// const ELEMENT_DATA: PeriodicElement[] = [
//   {course: "Infi 2", mark: 70, points: 5.0, year: '1' , semester: 'B'},
//   {course: "Linery", mark: 86, points: 5.0, year: '1' , semester: 'A'},
//   {course: "Infi 1", mark: 60, points: 6.5, year: '1' , semester: 'A'},
//   {course: "Descret Math", mark: 65, points: 5.0, year: '1' , semester: 'A'},
//   {course: "Prog C pro", mark: 90, points: 3.0, year: '1' , semester: 'B'},
//   {course: "Data structures", mark: 84, points: 4.0, year: '1' , semester: 'B'},
//   {course: "Data bases (Sql)", mark: 75, points: 4.0, year: '2' , semester: 'A'},
//   {course: "C++", mark: 100, points: 5.0, year: '2' , semester: 'A'},
//   {course: "Philosophy literature", mark: 90, points: 2.0, year: '2' , semester: 'A'},
//   {course: "Philosophy literature", mark: 85, points: 2.0, year: '1' , semester: 'C'},
//   {course: ".Net C#", mark: 92, points: 3.0, year: '2' , semester: 'B'},
//   {course: "Operating System", mark: 76, points: 3.5, year: '2' , semester: 'B'},
//   {course: "Design patterns", mark: 96, points: 3, year: '3' , semester: 'A'},
//   {course: "Algo A", mark: 85, points: 83, year: '2' , semester: 'B'},
//   {course: "Prog C", mark: 79, points: 5.0, year: '1' , semester: 'A'},
// ];



