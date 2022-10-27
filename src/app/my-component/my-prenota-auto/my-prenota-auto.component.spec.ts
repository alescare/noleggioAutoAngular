import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPrenotaAutoComponent } from './my-prenota-auto.component';

describe('MyPrenotaAutoComponent', () => {
  let component: MyPrenotaAutoComponent;
  let fixture: ComponentFixture<MyPrenotaAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPrenotaAutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPrenotaAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
