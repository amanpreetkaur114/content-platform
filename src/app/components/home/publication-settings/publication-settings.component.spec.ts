import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationSettingsComponent } from './publication-settings.component';

describe('PublicationSettingsComponent', () => {
  let component: PublicationSettingsComponent;
  let fixture: ComponentFixture<PublicationSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicationSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
