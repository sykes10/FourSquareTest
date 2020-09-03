import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
// Custom Components
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { VenueItemComponent } from './components/venue-item/venue-item.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

// Custom Services
import { SearchService } from './services/search.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    VenueItemComponent,
    SpinnerComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [SearchService],
  bootstrap: [AppComponent],
})
export class AppModule {}
