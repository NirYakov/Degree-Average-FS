import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoursesService } from './services/courses.service';
// import { TableBasicExample } from './table-data/table-courses/table-courses.component';

import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './components/nav-bar/nav-bar/nav-bar.component';
import { TableCoursesComponent } from './components/table-data/table-courses/table-courses.component';
import { InfoDataComponent } from './components/info-data/info-data/info-data.component';
import { StatisticComponent } from './components/info-data/info-data/statistic/statistic/statistic.component';
import { AddCourseComponent } from './components/add-course/add-course/add-course.component';

import {MatError, MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { YearTableComponent } from './components/info-data/year-table/year-table.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TableCoursesComponent,
    InfoDataComponent,
    StatisticComponent,
    AddCourseComponent,
    YearTableComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSortModule
    
   // MatError

  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
