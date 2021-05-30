import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTemporaryCertificateComponent } from './update-temporary-certificate.component';

describe('UpdateTemporaryCertificateComponent', () => {
  let component: UpdateTemporaryCertificateComponent;
  let fixture: ComponentFixture<UpdateTemporaryCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTemporaryCertificateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTemporaryCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
