import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpeedPage } from './speed.page';

describe('SpeedPage', () => {
  let component: SpeedPage;
  let fixture: ComponentFixture<SpeedPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
