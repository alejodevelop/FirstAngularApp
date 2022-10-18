import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeteraComponent } from './tetera.component';

describe('TeteraComponent', () => {
  let component: TeteraComponent;
  let fixture: ComponentFixture<TeteraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeteraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeteraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
