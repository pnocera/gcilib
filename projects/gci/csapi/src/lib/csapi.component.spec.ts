import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsapiComponent } from './csapi.component';

describe('CsapiComponent', () => {
  let component: CsapiComponent;
  let fixture: ComponentFixture<CsapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
