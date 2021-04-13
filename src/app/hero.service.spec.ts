import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { HeroService } from './hero.service';

describe('HeroService', () => {
  let service: HeroService;
  // let httpClientSpy: {get: jasmine.Spy}

  beforeEach(() => {
    // constructor(private messageService: MessageService, private http: HttpClient) { }
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler]
    });
    service = TestBed.inject(HeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
