import { TestBed, async } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";

// Components
import { SearchBarComponent } from "../../../app/src/app/components/search-bar/search-bar.component";
import { VenueItemComponent } from "../../../app/src/app/components/venue-item/venue-item.component";
import { SpinnerComponent } from "../../../app/src/app/components/spinner/spinner.component";

import { AbstractMockObservableService } from "./services/mock.service";
import { SearchService } from "./services/search.service";
import { HttpClient, HttpClientModule } from "@angular/common/http";

class MockService extends AbstractMockObservableService {
  doStuff() {
    return this;
  }
}
let mockService;
describe("AppComponent", () => {
  beforeEach(async(() => {
    mockService = new MockService();
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [
        AppComponent,
        SearchBarComponent,
        VenueItemComponent,
        SpinnerComponent,
      ],
      providers: [
        { provide: SearchService, useValue: mockService },
        HttpClientModule,
        HttpClient,
      ],
    }).compileComponents();
  }));

  it("should create the app", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
