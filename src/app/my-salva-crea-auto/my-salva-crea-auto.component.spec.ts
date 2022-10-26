import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySalvaCreaAutoComponent } from './my-salva-crea-auto.component';

describe('MySalvaCreaAutoComponent', () => {
  let component: MySalvaCreaAutoComponent;
  let fixture: ComponentFixture<MySalvaCreaAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySalvaCreaAutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MySalvaCreaAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
