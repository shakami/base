import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShbNavbarComponent } from './shb-navbar.component';

describe('ShbNavbarComponent', () => {
  let component: ShbNavbarComponent;
  let fixture: ComponentFixture<ShbNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShbNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShbNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
