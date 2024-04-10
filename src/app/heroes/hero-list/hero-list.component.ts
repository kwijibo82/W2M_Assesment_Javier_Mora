import { Component, OnInit, OnDestroy } from '@angular/core';
import { Hero } from '../../models/hero.model';
import { HeroService } from '../../services/hero.service';
import { Subscription, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
})
export class HeroListComponent implements OnInit, OnDestroy {
  heroes: Hero[] = [];
  filteredHeroes: Hero[] = [];
  private subscription = new Subscription();
  isLoading: boolean = false;
  private searchTerms = new Subject<string>();
  newHero: Hero = {
    name: '',
    id: 0,
  };

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
    this.subscription.add(
      this.searchTerms
        .pipe(debounceTime(300), distinctUntilChanged())
        .subscribe((term) => {
          this.applyFilter(term);
        })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getHeroes(): void {
    this.isLoading = true;
    this.heroService.getHeroes().subscribe({
      next: (heroes) => {
        this.heroes = heroes;
        this.filteredHeroes = heroes;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      },
    });
  }

  applyFilter(filterValue: string): void {
    this.filteredHeroes = this.heroes.filter((hero) =>
      hero.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  }

  confirmDelete(heroToDelete: Hero): void {
    this.heroService.deleteHero(heroToDelete.id).subscribe(() => {
      this.heroes = this.heroes.filter((hero) => hero.id !== heroToDelete.id);
      this.filteredHeroes = this.filteredHeroes.filter(
        (hero) => hero.id !== heroToDelete.id
      );
      this.heroes.forEach((hero, index) => {
        hero.id = index + 1;
      });
      this.applyFilter('');
    });
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }
}
