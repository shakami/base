import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShbResumeComponent } from './shb-resume.component';

describe('ShbResumeComponent', () => {
  let component: ShbResumeComponent;
  let fixture: ComponentFixture<ShbResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShbResumeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShbResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
