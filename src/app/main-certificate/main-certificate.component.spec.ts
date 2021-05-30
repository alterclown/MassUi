import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCertificateComponent } from './main-certificate.component';

describe('MainCertificateComponent', () => {
  let component: MainCertificateComponent;
  let fixture: ComponentFixture<MainCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCertificateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
