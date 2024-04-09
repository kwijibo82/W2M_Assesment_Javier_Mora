import { Component, OnInit, OnDestroy } from '@angular/core';
import { Hero } from '../../models/hero.model';
import { HeroService } from '../hero.service';
import { NotificationService } from '../../services/notification.service';
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
  searchTerm: string = ''; // Use this property for the search term
  private subscription = new Subscription();
  isLoading: boolean = false;
  private searchTerms = new Subject<string>();

  constructor(
    private heroService: HeroService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.getHeroes();
    this.subscription.add(
      this.searchTerms.pipe(debounceTime(300), distinctUntilChanged())
      .subscribe(term => {
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
        this.notificationService.showError('Error al cargar los héroes.');
      },
    });
  }

  applyFilter(filterValue: string): void {
    this.filteredHeroes = this.heroes.filter(hero => 
      hero.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  }

  confirmDelete(heroToDelete: Hero): void {
    this.heroService.deleteHero(heroToDelete.id).subscribe({
      next: () => {
        this.heroes = this.heroes.filter(hero => hero.id !== heroToDelete.id);
        this.filteredHeroes = this.filteredHeroes.filter(hero => hero.id !== heroToDelete.id);
        this.notificationService.showSuccess('Héroe eliminado con éxito.');
      },
      error: () => {
        this.notificationService.showError('Error al eliminar el héroe.');
      }
    });
  }

  search(term: string): void {
    this.searchTerm = term;
    this.applyFilter(term);
  }
}
