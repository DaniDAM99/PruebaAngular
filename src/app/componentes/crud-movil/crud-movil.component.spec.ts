import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudMovilComponent } from './crud-movil.component';

describe('CrudMovilComponent', () => {
  let component: CrudMovilComponent;
  let fixture: ComponentFixture<CrudMovilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudMovilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudMovilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
