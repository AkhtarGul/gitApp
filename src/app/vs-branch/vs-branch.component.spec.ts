import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VsBranchComponent } from './vs-branch.component';

describe('VsBranchComponent', () => {
  let component: VsBranchComponent;
  let fixture: ComponentFixture<VsBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VsBranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VsBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
