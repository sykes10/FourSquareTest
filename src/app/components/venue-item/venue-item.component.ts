import { Component, Input } from '@angular/core';

@Component({
  selector: 'and-venue-item',
  templateUrl: './venue-item.component.html',
  styleUrls: ['./venue-item.component.scss']
})
export class VenueItemComponent {
  @Input() data: any;
  @Input() index: any;
}
