import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueListItemComponent } from './venue-list-item.component';

describe('VenueListItemComponent', () => {
  let component: VenueListItemComponent;
  let fixture: ComponentFixture<VenueListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenueListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
