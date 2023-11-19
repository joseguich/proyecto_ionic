import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlacesDetailPage } from './places-detail.page';

describe('PlacesDetailPage', () => {
  let component: PlacesDetailPage;
  let fixture: ComponentFixture<PlacesDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PlacesDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
