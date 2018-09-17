import { TestBed, inject } from '@angular/core/testing';
import { AbstractMockObservableService } from './mock.service';
import { SearchService } from './search.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

class MockService extends AbstractMockObservableService {
  doStuff() {
    return this;
  }
}
let mockService;

describe('SearchService', () => {
  beforeEach(() => {
    mockService = new MockService();
    TestBed.configureTestingModule({
      providers: [{provide: SearchService, useValue: mockService }, HttpClientModule, HttpClient]
    });
  });

  it('should be created', inject([SearchService], (service: SearchService) => {
    expect(service).toBeTruthy();
  }));
});
