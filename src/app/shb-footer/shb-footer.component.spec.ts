import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShbFooterComponent } from './shb-footer.component';

describe('ShbFooterComponent', () => {
  let component: ShbFooterComponent;
  let fixture: ComponentFixture<ShbFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShbFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShbFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
