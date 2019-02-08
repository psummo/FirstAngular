import { Injectable } from '@angular/core';
import {Course} from './Models/Course';

@Injectable()
export class CoursesService {
  private courseList: any;

  constructor() {  }
  getCourses(): Course[] {
    const courseList: Course[] = [];
    courseList.push(new Course('TypeScript', 3, 'Francesco'));
    courseList.push(new Course('Angular', 4, 'Francesco'));
    return courseList;
  }
}
