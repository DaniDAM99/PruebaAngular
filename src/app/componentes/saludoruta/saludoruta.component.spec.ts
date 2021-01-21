import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaludorutaComponent } from './saludoruta.component';

describe('SaludorutaComponent', () => {
  let component: SaludorutaComponent;
  let fixture: ComponentFixture<SaludorutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaludorutaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaludorutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
