import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BriefTemplateComponent } from './brief-template.component';

describe('BriefTemplateComponent', () => {
  let component: BriefTemplateComponent;
  let fixture: ComponentFixture<BriefTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BriefTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BriefTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
