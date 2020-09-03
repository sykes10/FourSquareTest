import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";

// Custom Components
import { SearchBarComponent } from "../../../app/src/app/components/search-bar/search-bar.component";

// Custom Services
import { SearchService } from "./services/search.service";
import { VenueItemComponent } from "../../../app/src/app/components/venue-item/venue-item.component";
import { SpinnerComponent } from "../../../app/src/app/components/spinner/spinner.component";

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
