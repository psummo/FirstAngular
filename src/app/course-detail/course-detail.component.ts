import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Course} from '../Models/Course';
import {StudentService} from '../student.service';
import {Student} from '../Models/Student';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit, OnChanges {
  @Input()
  courseInput: Course = null;
  courseStudents: Student[] = [];
  constructor(private studentService: StudentService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.courseInput && this.courseInput.id) {
      this.courseStudents = this.studentService.getCourseStudent(this.courseInput.id);
    }
  }
}
