import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarloteriaComponent } from './generarloteria.component';

describe('GenerarloteriaComponent', () => {
  let component: GenerarloteriaComponent;
  let fixture: ComponentFixture<GenerarloteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerarloteriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerarloteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
