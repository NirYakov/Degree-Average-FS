import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './components/add-course/add-course/add-course.component';
import { StatisticComponent } from './components/info-data/info-data/statistic/statistic/statistic.component';
import { TableCoursesComponent } from './components/table-data/table-courses/table-courses.component';

const routes: Routes = [
  // {path : '' , component : null},
  // {path : 'create' , component : null},

  { path: '', component: TableCoursesComponent },
  { path: 'addcourse', component: AddCourseComponent },
  { path: 'statistic', component: StatisticComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
