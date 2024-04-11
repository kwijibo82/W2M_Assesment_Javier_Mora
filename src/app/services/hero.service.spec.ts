import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HeroService } from './hero.service';
import { Hero } from '../models/hero.model';

describe('HeroService', () => {
  let service: HeroService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HeroService]
    });
    service = TestBed.inject(HeroService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should return all heroes', () => {
    const mockHeroes: Hero[] = [
      { id: 1, name: 'Hero One' },
      { id: 2, name: 'Hero Two' }
    ];

    service.getHeroes().subscribe(heroes => {
      expect(heroes.length).toBe(2);
      expect(heroes).toEqual(mockHeroes);
    });

    const req = httpTestingController.expectOne(service.apiUrl);
    expect(req.request.method).toEqual('GET');
    req.flush(mockHeroes);
  });

  it('should return a single hero by ID', () => {
    const mockHero: Hero = { id: 1, name: 'Hero One' };

    service.getHeroById(1).subscribe(hero => {
      expect(hero).toEqual(mockHero);
    });

    const req = httpTestingController.expectOne(`${service.apiUrl}/1`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockHero);
  });

  it('should update a hero and return the updated hero', () => {
    const updatedHero: Hero = { id: 1, name: 'Updated Hero' };

    service.updateHero(updatedHero).subscribe(hero => {
      expect(hero).toEqual(updatedHero);
    });

    const req = httpTestingController.expectOne(`${service.apiUrl}/${updatedHero.id}`);
    expect(req.request.method).toEqual('PUT');
    req.flush(updatedHero);
  });

  it('should add a hero and return the added hero', () => {
    const newHero: Hero = { id: 3, name: 'New Hero' };

    service.addHero(newHero).subscribe(hero => {
      expect(hero).toEqual(newHero);
    });

    const req = httpTestingController.expectOne(service.apiUrl);
    expect(req.request.method).toEqual('POST');
    req.flush(newHero);
  });

  it('should delete a hero', () => {
    const heroId = 1;

    service.deleteHero(heroId).subscribe((response) => {
      expect(response).toBeNull();
    });

    const req = httpTestingController.expectOne(`${service.apiUrl}/${heroId}`);
    expect(req.request.method).toEqual('DELETE');
    req.flush(null);
  });
});
