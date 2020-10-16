import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantPortalComponent } from './restaurant-portal.component';

describe('RestaurantPortalComponent', () => {
  let component: RestaurantPortalComponent;
  let fixture: ComponentFixture<RestaurantPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
