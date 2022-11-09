import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet';

@Component({
	selector: 'app-pet-list',
	templateUrl: './pet-list.component.html',
	styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {

	// We built pet-detail first. Now let's build
	// pet-list.
	//
	// We will have a list of pets.
	// This component will display the list,
	// with each pet using the pet-detail component.
	// We will have a "form" for adding a pet.
	// We will handle the delete event that comes
	// from the pet-detail component.

	// We'll create a list and temporarily put
	// test data in it. But then after we see it's
	// working for displaying it, we will remove
	// the test data.

	// Then we'll add the view for displaying them.
	// The view will be a for loop that goes through
	// the list and sends each individual one into
	// a pet-detail component. (That's why the pet-detail
	// component needed @Input.)
	// For the list, I recommend <ng-container></ng-container>.

	TheList: Pet[] = [
		// After testing, let's remove the test data
		// I'll leave here as a comment.
		/*{ name: 'Muffin', species: 'cat', born: 1979 },
		{ name: 'Donald Duck', species: 'cat', born: 2007}*/
	];

	// For the add:
	//    We create the "form"
	//    We make variables for each input box
	//    Then we bind the variables to the input boxes
	//    We include an "add" button whose event handler
	//      creates a new Pet and adds it to the list.
	newName: string = '';
	newSpecies: string = '';
	newBorn: number = 0;

	constructor() { }

	ngOnInit(): void {
	}

	add() {
		// Create a new Pet object and add it to the list
		// Then clear out the input boxes
		this.TheList.push(
			{
				name: this.newName,
				species: this.newSpecies,
				born: this.newBorn
			}
		);
		this.newName = '';
		this.newSpecies = '';
		this.newBorn = 0;
	}

	deletePet(whichPet: Pet) {
		for (let index: number = 0; index <= this.TheList.length; index++) {
			if (this.TheList[index] == whichPet) {
				// Remove from list
				this.TheList.splice(index, 1);
				return;
			}
		}
	}

}
