import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { CoursesComponent } from './courses/courses.component';
import {CoursesService} from './courses.service';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { StudentsComponent } from './students/students.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    CoursesComponent,
    CourseDetailComponent,
    CourseFormComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
