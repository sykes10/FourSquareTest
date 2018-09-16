import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'and-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  @Output() onSearch = new EventEmitter();
  private searchQuery: string;

  constructor() {
    this.searchQuery = '';
  }

  search() {
    this.onSearch.emit(this.searchQuery);
  }

}
