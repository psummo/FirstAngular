import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Course} from '../Models/Course';
import {CoursesService} from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  // EMITTER PER ANDARE FUORI DAL COMPONENT
  @Output()
  courseSelected = new EventEmitter<Course>();
  coursesList: Course[] = [];
  constructor(private coursesService: CoursesService) {
  }

  ngOnInit() {
    this.coursesList = this.coursesService.getCourses();
  }

  // DA UN COMPONENT AD UN ALTRO
  selectCourse(course: Course) {
    this.courseSelected.emit(course);
  }
}
