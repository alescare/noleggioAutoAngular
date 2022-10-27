import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySalvaCreaUtenteComponent } from './my-salva-crea-utente.component';

describe('MySalvaCreaUtenteComponent', () => {
  let component: MySalvaCreaUtenteComponent;
  let fixture: ComponentFixture<MySalvaCreaUtenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySalvaCreaUtenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MySalvaCreaUtenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
