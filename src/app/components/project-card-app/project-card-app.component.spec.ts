import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCardAppComponent } from './project-card-app.component';

describe('ProjectCardAppComponent', () => {
  let component: ProjectCardAppComponent;
  let fixture: ComponentFixture<ProjectCardAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCardAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectCardAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
