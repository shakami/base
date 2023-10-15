import { Component, OnInit } from '@angular/core';
import { Education } from './education';
import { Employment } from './employment';

const EDUCATIONS: Education[] = [
  { school: 'University of Washington', major: 'B.S. in Computer Science', dateFrom: '2015', dateTo: '2018' },
  { school: 'Bellevue College', major: 'Associate in Arts and Sciences', dateFrom: '2012', dateTo: '2015' },
];

const EXPERIENCES: Employment[] = [
  { company: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  { company: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  { company: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  { company: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  { company: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
];

@Component({
  selector: 'app-shb-resume',
  templateUrl: './shb-resume.component.html',
  styleUrls: ['./shb-resume.component.css'],
})

export class ShbResumeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['data'];
  tblEducationSource = EDUCATIONS;
  tblExperienceSource = EXPERIENCES;

}
