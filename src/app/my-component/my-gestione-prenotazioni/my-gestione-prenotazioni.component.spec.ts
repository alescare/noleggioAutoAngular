import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGestionePrenotazioniComponent } from './my-gestione-prenotazioni.component';

describe('MyGestionePrenotazioniComponent', () => {
  let component: MyGestionePrenotazioniComponent;
  let fixture: ComponentFixture<MyGestionePrenotazioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyGestionePrenotazioniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyGestionePrenotazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
