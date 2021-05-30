import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCertificateListComponent } from './main-certificate-list.component';

describe('MainCertificateListComponent', () => {
  let component: MainCertificateListComponent;
  let fixture: ComponentFixture<MainCertificateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCertificateListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCertificateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
