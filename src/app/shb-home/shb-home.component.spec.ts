import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShbHomeComponent } from './shb-home.component';

describe('ShbHomeComponent', () => {
  let component: ShbHomeComponent;
  let fixture: ComponentFixture<ShbHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShbHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShbHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
