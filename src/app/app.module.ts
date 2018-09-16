import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

// Custom Components
import { SearchBarComponent } from './components/search-bar/search-bar.component';

// Custom Services
import { SearchService } from './services/search.service';
import { VenueListComponent } from './components/venue-list/venue-list.component';
import { VenueListItemComponent } from './components/venue-list-item/venue-list-item.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    VenueListComponent,
    VenueListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
