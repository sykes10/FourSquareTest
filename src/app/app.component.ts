import { Component } from '@angular/core';
import { SearchService } from './services/search.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  venueList: Array<any>;
  loading: boolean;
  constructor(private searchSrv: SearchService) {
    this.venueList = [];
    this.loading = false;
  }
  search(query) {
    this.loading = true;
    this.searchSrv.getVenues(query).subscribe((response) => {
      this.venueList = response.response.venues;
      this.loading = false;
    });
  }
}
