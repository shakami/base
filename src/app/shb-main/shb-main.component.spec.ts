import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShbMainComponent } from './shb-main.component';

describe('ShbMainComponent', () => {
  let component: ShbMainComponent;
  let fixture: ComponentFixture<ShbMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShbMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShbMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
