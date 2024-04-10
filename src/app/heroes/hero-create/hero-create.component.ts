import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero.model';
import { HeroService } from '../../services/hero.service';
import { Router } from '@angular/router';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-hero-create',
  templateUrl: './hero-create.component.html',
  styleUrls: ['./hero-create.component.css'],
})
export class HeroCreateComponent implements OnInit {
  newHero: Hero = {
    name: '',
    id: 0,
  };
  existingHeroes: Hero[] = [];

  constructor(
    private heroService: HeroService,
    private router: Router,
    public notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.loadExistingHeroes();
  }

  loadExistingHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe((heroes) => (this.existingHeroes = heroes));
  }

  createHero(): void {
    if (!this.newHero.name.trim()) {
      this.notificationService.showError(
        'El nombre del héroe no puede estar en blanco.'
      );
      return;
    }
<<<<<<< HEAD

    const heroExists = this.existingHeroes.some(
      (hero) => hero.name.toLowerCase() === this.newHero.name.toLowerCase()
    );
=======
    const heroExists = this.existingHeroes.some(hero => hero.name.toLowerCase() === this.newHero.name.toLowerCase());
>>>>>>> recovering_code_v2
    if (heroExists) {
      this.notificationService.showError('Ya existe un héroe con ese nombre.');
      return;
    }
    const ids = this.existingHeroes.map(hero => hero.id).sort((a, b) => a - b);
    let newId = 1;
    for (let i = 0; i < ids.length; i++) {
      if (ids[i] > newId) {
        break;
      }
      newId++;
    }
    this.newHero.id = newId;
    this.heroService.addHero(this.newHero).subscribe({
      next: () => {
        this.notificationService.showSuccess('Héroe creado con éxito!');
        this.router.navigate(['/heroes']);
      },
      error: () => {
        this.notificationService.showError('Error al crear el héroe.');
      },
    });
  }

  onNameInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.newHero.name = value;
  }
}
