import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMainCertificateComponent } from './create-main-certificate.component';

describe('CreateMainCertificateComponent', () => {
  let component: CreateMainCertificateComponent;
  let fixture: ComponentFixture<CreateMainCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMainCertificateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMainCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
