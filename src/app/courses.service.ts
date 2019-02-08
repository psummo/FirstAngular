import { Injectable } from '@angular/core';
import {Course} from './Models/Course';

@Injectable()
export class CoursesService {
  private courseList: Course[] = [];

  constructor() {
    let courseTmp = new Course('TypeScript', 3, 'Francesco')
    courseTmp.id = this.getNextId();
    this.courseList.push(courseTmp);
    courseTmp = new Course('Angular', 4, 'Francesco');
    courseTmp.id = this.getNextId();
    this.courseList.push(courseTmp);
  }
  getCourses(): Course[] {
    return this.courseList;
  }
  addCourses(course: Course): void {
    course.id = this.courseList.length + 1;

    this.courseList.push(course);
  }
  removeCourses(course: Course): void {
    const index = this.courseList.indexOf(course);
    if (index > -1) {
      this.courseList.splice(index, 1);
    }
  }
  getNextId(): number {
    if (this.courseList.length === 0) {
      return 1;
    }
    const tmpArrayId = this.courseList.map(course => course.id);
    const id = Math.max(...tmpArrayId);
    return id+1;
  }
}
