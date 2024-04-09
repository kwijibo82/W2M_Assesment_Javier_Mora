import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroService } from '../hero.service';
import { Hero } from '../../models/hero.model';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-hero-edit',
  templateUrl: './hero-edit.component.html',
  styleUrls: ['./hero-edit.component.css']
})
export class HeroEditComponent implements OnInit {

  hero: Hero = {
    name: '', 
    id: 0
  };

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private router: Router,
    public notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.heroService.getHeroById(+id).subscribe(heroData => {
        this.hero = heroData;
      });
    }
  }

  saveHero(): void {

    if (!this.hero.name.trim()) {
      this.notificationService.showError('El nombre del héroe no puede estar en blanco.');
      return;
    }

    if (this.hero) {
      this.heroService.updateHero(this.hero).subscribe(() => {
        this.router.navigate(['/heroes']);
      });
    }
  }
}
