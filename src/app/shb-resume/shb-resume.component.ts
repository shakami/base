import { Component, OnInit } from '@angular/core';
import { ReCaptchaV3Service } from 'ng-recaptcha';
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

  constructor(private recaptchaV3Service: ReCaptchaV3Service) { }

  public beforeSubmittingForm(): void { }
  
  ngOnInit(): void {
    this.recaptchaV3Service.execute('importantAction');
  }

  displayedColumns: string[] = ['data'];
  tblEducationSource: Education[] = Array.from(EDUCATIONS);
  tblExperienceSource: Employment[] = Array.from(EMPLOYMENTS);
}
