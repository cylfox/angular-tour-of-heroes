import { HttpClient, HttpErrorResponse, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Observable, of, throwError } from 'rxjs';
import { Hero } from './hero';

import { HeroService } from './hero.service';
import { MessageService } from './message.service';

describe('HeroService', () => {
  let heroService: HeroService;
  let httpClientSpy: { get: jasmine.Spy }

  beforeEach(() => {
    // constructor(private messageService: MessageService, private http: HttpClient) { }
    // TestBed.configureTestingModule({
    //   providers: [HttpClient, HttpHandler]
    // });
    // service = TestBed.inject(HeroService);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    heroService = new HeroService(new MessageService, httpClientSpy as any);
  });

  it('should be created', () => {
    expect(heroService).toBeTruthy();
  });

  it('should return expected heroes', () => {
    const expectedHeroes: Hero[] =
      [{ id: 1, name: 'A' }, { id: 2, name: 'B' }];

    // prepare the http get response
    httpClientSpy.get.and.returnValue(of(expectedHeroes));

    heroService.getHeroes().subscribe(heroes =>
      expect(heroes).toEqual(expectedHeroes, 'expected heroes array'),
      fail
    )
  })

  it('should return an empty array when the server returns an error', () => {
    const expectedHeroes: Hero[] = [];
    
    httpClientSpy.get.and.returnValue(throwError({status: 404}));

    heroService.getHeroes().subscribe(heroes =>
      expect(heroes).toEqual(expectedHeroes, 'expected heroes array'),
      fail
    )
  })
});
