import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseDetailComponent } from './enterprise-detail.component';

describe('EnterpriseDetailComponent', () => {
  let component: EnterpriseDetailComponent;
  let fixture: ComponentFixture<EnterpriseDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnterpriseDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnterpriseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
