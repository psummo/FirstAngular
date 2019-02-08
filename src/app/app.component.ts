import { Component } from '@angular/core';
import {Course} from './Models/Course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courseImported: Course = null;
  passCourse(course: Course) {
    this.courseImported = course;
  }
}
