import { Component } from '@angular/core';
import { City } from './city';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'angular1demo';
	name: string = 'Sally';
	newcity: string = '';

	// Part 1
	cities: string[] = [
		'Detroit',
		'Chicago',
		'New York',
		'Orlando',
		'Salt Lake City'
	];

	addCity() {
		// TO MODIFY our user interface,
		// we change the values of our member variables
		this.cities.push(this.newcity);
		//this.cities.splice(0,1);
		this.name = 'Fred';
	}

	// Part 2

	morecities: City[] = [
		{
			name: 'Detroit',
			state: 'MI',
			population: 500000
		},
		{
			name: 'New York',
			state: 'NY',
			population: 4000000
		},
		{
			name: 'Lansing',
			state: 'MI',
			population: 100000
		}
	];
}
