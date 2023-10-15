import { Component, OnInit } from '@angular/core';
import { Education } from './education';
import { Employment } from './employment';
import * as EDUCATIONS from 'src/assets/education.json';
import * as EMPLOYMENTS from 'src/assets/employment.json';

@Component({
  selector: 'app-shb-resume',
  templateUrl: './shb-resume.component.html',
  styleUrls: ['./shb-resume.component.css'],
})

export class ShbResumeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  displayedColumns: string[] = ['data'];
  tblEducationSource: Education[] = Array.from(EDUCATIONS);
  tblExperienceSource: Employment[] = Array.from(EMPLOYMENTS);

}
