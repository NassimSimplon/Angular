import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleVideoUIComponent } from './single-video-ui.component';

describe('SingleVideoUIComponent', () => {
  let component: SingleVideoUIComponent;
  let fixture: ComponentFixture<SingleVideoUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleVideoUIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleVideoUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
