import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero.model';
import { HeroService } from '../hero.service';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
})
export class HeroListComponent implements OnInit {
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

    this.searchTerms
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((term) => {
        this.applyFilter(term);
      });
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getHeroes(): void {
    this.isLoading = true;

    setTimeout(() => {
      this.heroService.getHeroes().subscribe({
        next: (heroes) => {
          this.heroes = heroes;
          this.filteredHeroes = heroes;
          this.isLoading = false;
        },
        error: (err) => {
          console.error('Error fetching heroes', err);
          this.isLoading = false;
        },
      });
    }, 1000);
  }

  applyFilter(filterValue: string): void {
    this.filteredHeroes = this.heroes.filter((hero) => {
      return hero.name.toLowerCase().includes(filterValue.toLowerCase());
    });
  }

  confirmDelete(hero: Hero): void {
    if (confirm(`¿Estás seguro de que deseas borrar a ${hero.name}?`)) {
      this.heroService.deleteHero(hero.id).subscribe(() => {
        this.getHeroes();
      });
    }
  }
}
