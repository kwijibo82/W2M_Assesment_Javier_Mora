import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroListComponent } from './hero-list.component';
import { HeroListRoutingModule } from './hero-list-routing.module';
import { LoaderComponent } from '../../shared/loader/loader.component';
import { HeroService } from '../../services/hero.service';
import { SharedModule } from "../../shared/shared-modules/shared.module";

@NgModule({
    declarations: [HeroListComponent],
    providers: [
        {
            provide: HeroService,
            useClass: HeroService,
        },
    ],
    exports: [HeroListComponent],
    imports: [
        CommonModule,
        FormsModule,
        HeroListRoutingModule,
        LoaderComponent,
        SharedModule
    ]
})
export class HeroListModule {}
