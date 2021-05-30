import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemporaryCertificateListComponent } from './temporary-certificate-list.component';

describe('TemporaryCertificateListComponent', () => {
  let component: TemporaryCertificateListComponent;
  let fixture: ComponentFixture<TemporaryCertificateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemporaryCertificateListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemporaryCertificateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
