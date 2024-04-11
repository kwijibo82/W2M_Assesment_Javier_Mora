import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroService } from '../../services/hero.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
import { Hero } from '../../models/hero.model';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-hero-edit',
  templateUrl: './hero-edit.component.html',
  styleUrls: ['./hero-edit.component.css'],
})
export class HeroEditComponent implements OnInit {
  hero: Hero = {
    name: '',
    id: 0,
  };
  isCreatingNew: unknown;

  constructor(
    public heroService: HeroService,
    private route: ActivatedRoute,
    private router: Router,
    public notificationService: NotificationService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.heroService.getHeroById(+id).subscribe((heroData) => {
        this.hero = heroData;
      });
    }
  }

  saveHero(): void {
    if (!this.hero.name.trim()) {
      this.notificationService.showError(
        'El nombre del héroe no puede estar en blanco.'
      );
      return;
    }
    if (this.isCreatingNew) {
      this.heroService.addHero(this.hero).subscribe(() => {
        this.notificationService.showSuccess('Héroe creado con éxito!');
        this.router.navigate(['/heroes']);
      });
    } else {
      this.heroService.updateHero(this.hero).subscribe(() => {
        this.notificationService.showSuccess('Héroe actualizado con éxito!');
        this.router.navigate(['/heroes']);
      });
    }
  }

  deleteHero(): void {
    if (!this.hero.name.trim()) {
      this.notificationService.showError(
        'El nombre del héroe no puede estar en blanco.'
      );
      return;
    } else {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        width: '250px',
        data: { name: this.hero.name },
      });

      dialogRef.afterClosed().subscribe((result) => {
        if (result === 'ok') {
          this.heroService.deleteHero(this.hero.id).subscribe(() => {
            this.notificationService.showSuccess('Héroe eliminado con éxito.');
            this.router.navigate(['/heroes']);
          });
        }
      });
    }
  }
}
