import { Component } from '@angular/core';
import { SearchService } from './services/search.service';
@Component({
  selector: 'and-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private searchSrv: SearchService) {

  }
  search(query) {
    this.searchSrv.getVenues(query).subscribe(venues => {
      console.log(venues);
    });
  }
}
