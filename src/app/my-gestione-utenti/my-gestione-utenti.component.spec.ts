import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGestioneUtentiComponent } from './my-gestione-utenti.component';

describe('MyGestioneUtentiComponent', () => {
  let component: MyGestioneUtentiComponent;
  let fixture: ComponentFixture<MyGestioneUtentiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyGestioneUtentiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyGestioneUtentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
