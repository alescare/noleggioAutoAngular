import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGestioneAutoComponent } from './my-gestione-auto.component';

describe('MyGestioneAutoComponent', () => {
  let component: MyGestioneAutoComponent;
  let fixture: ComponentFixture<MyGestioneAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyGestioneAutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyGestioneAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
