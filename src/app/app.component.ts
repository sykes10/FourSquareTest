import { Component } from '@angular/core';
import { SearchService } from './services/search.service';
@Component({
  selector: 'and-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  venueList: Array<any>;
  constructor(private searchSrv: SearchService) {
    this.venueList = [];
  }
  search(query) {
    this.searchSrv.getVenues(query).subscribe(response => {
      this.venueList = response.response.venues;
    });
  }
}
