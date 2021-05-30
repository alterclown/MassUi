import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemporaryCertificateComponent } from './temporary-certificate.component';

describe('TemporaryCertificateComponent', () => {
  let component: TemporaryCertificateComponent;
  let fixture: ComponentFixture<TemporaryCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemporaryCertificateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemporaryCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
