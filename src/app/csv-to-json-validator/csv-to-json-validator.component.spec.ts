import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvToJsonValidatorComponent } from './csv-to-json-validator.component';

describe('CsvToJsonValidatorComponent', () => {
  let component: CsvToJsonValidatorComponent;
  let fixture: ComponentFixture<CsvToJsonValidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsvToJsonValidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsvToJsonValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
