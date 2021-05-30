import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMainCertificateComponent } from './update-main-certificate.component';

describe('UpdateMainCertificateComponent', () => {
  let component: UpdateMainCertificateComponent;
  let fixture: ComponentFixture<UpdateMainCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMainCertificateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMainCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
