import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
	selector: 'dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: [ './dashboard.component.css' ],
})

export class DashboardComponent implements OnInit {

	heroes: Hero[] = [];

	constructor(private heroService: HeroService) {}

	ngOnInit(): void {
		this.heroService.getHeroes()
			.then(hhh => this.heroes = hhh.slice(1, 5));
	}
}