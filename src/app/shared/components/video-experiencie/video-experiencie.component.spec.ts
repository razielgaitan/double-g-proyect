import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoExperiencieComponent } from './video-experiencie.component';

describe('VideoExperiencieComponent', () => {
  let component: VideoExperiencieComponent;
  let fixture: ComponentFixture<VideoExperiencieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoExperiencieComponent]
    });
    fixture = TestBed.createComponent(VideoExperiencieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
