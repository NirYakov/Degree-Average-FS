import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { ICourse } from '../models/ICourse';
import { round2AfterThePoint } from '../utills/SomeUtills';


@Injectable()
export class CoursesService implements OnInit, OnDestroy {

  data: ICourse[] = ELEMENT_DATA;

  markValue: number = 0;
  points: number = 0;
  average: number = 0;

  averageChanged: number = 0;
  markValueChange: number = 0;


  numberAverage: number = 0;
  numberAverageSubject: Subject<number> = new Subject<number>();

  private subscriptionNumberAverage: Subscription;
  private unsubscribe = new Subject<void>();

  constructor() {
    this.markValue = this.data.reduce((prev, curr) => prev + curr.mark * curr.points, 0);
    this.points = this.data.reduce((prev, curr) => prev + curr.points, 0);
    this.average = this.markValue / this.points;
    this.average = this.averageChanged = round2AfterThePoint(this.average);

    this.markValueChange = this.markValue;

    this.sortByTime();

    this.subscriptionNumberAverage = this.numberAverageSubject.subscribe((value: number) => {
      this.numberAverage = value;
    });


  }

  ngOnDestroy(): void {
    this.subscriptionNumberAverage.unsubscribe();
  }

  ngOnInit(): void {
    // this.average = this.data.reduce( (prev , curr) => prev + curr.mark * curr.points,0);
    // this.points = this.data.reduce( (prev , curr) => prev + curr.points,0);
    // this.underLine = this.average / this.points;
    // this.underLine = round2AfterThePoint(this.underLine);

    console.log("Init ?? !");


    this.sortByTime();
  }



  getAllCourses() {
    return [...this.data];
  }

  addCourse(course: ICourse) {
    // this.data.push(course);

    console.log(course);

    this.calculateNewAverage(course.mark, course.points);

    this.data.unshift(course);
  }

  calculateNewAverage(mark: number, points: number, addValue: boolean = true) {

    if (!addValue) {
      points *= -1;
    }

    this.markValue += mark * points;
    this.markValueChange = this.markValue; // new Line to check and all ... 
    this.points += points;
    this.average = this.markValue / this.points;
  }



  sortByTime() {
    this.data.sort((x, y) => {
      const byYear = (+y.year) - (+x.year);

      if (byYear !== 0) {
        return byYear;
      } else {
        const xSemster = this.SemsterToNumber(x.semester);
        const ySemster = this.SemsterToNumber(y.semester);

        const bySemester = (ySemster) - (xSemster);
        return bySemester;
      }
    });
  }

  SemsterToNumber(semester: string) {
    let semesterNumber = 1; // == 'A'
    if (semester == 'B') {
      semesterNumber = 2;
    } else if (semester == 'C') {
      semesterNumber = 3;
    }

    return semesterNumber;
  }

  deleteCourseByIndex(index: number) {
    this.data.splice(1, 1);
    return [...this.data];
  }

  deleteCourseByCourse(course: ICourse) {
    const index = this.data.findIndex(c => c.course == course.course);
    this.data.splice(index, 1);
  }

  getMarkChange(marksTotalValue: number, pointTotal: number): number {
    return round2AfterThePoint(marksTotalValue / pointTotal);
  }


  calculateNewAverageChanged(markNew: number, points: number, markOld: number) {

    const avrg = this.averageChanged;

    const markValueChangeLocal = this.markValueChange + (markNew - markOld) * points;
    //this.markValueChange += (markNew - markOld) * points;


    // if (!addValue) {
    //   points *= -1;
    // }
    // this.averageChanged = this.getMarkChange(); 
    // this.markValue += mark * points;
    // this.points += points;
    this.numberAverage++;
    // this.numberAverageSubject.next(this.numberAverage);

    const averageChangedLocal = this.getMarkChange(markValueChangeLocal, this.points)
    this.numberAverageSubject.next(averageChangedLocal);

    //  this.numberAverageSubject.next(this.numberAverage);

    return this.averageChanged;
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
