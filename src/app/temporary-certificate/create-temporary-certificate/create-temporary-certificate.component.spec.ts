import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTemporaryCertificateComponent } from './create-temporary-certificate.component';

describe('CreateTemporaryCertificateComponent', () => {
  let component: CreateTemporaryCertificateComponent;
  let fixture: ComponentFixture<CreateTemporaryCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTemporaryCertificateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTemporaryCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
