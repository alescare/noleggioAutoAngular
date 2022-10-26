import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfiloComponent } from './my-profilo.component';

describe('MyProfiloComponent', () => {
  let component: MyProfiloComponent;
  let fixture: ComponentFixture<MyProfiloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyProfiloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyProfiloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
