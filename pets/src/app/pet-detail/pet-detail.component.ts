import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pet } from '../pet';

@Component({
	selector: 'app-pet-detail',
	templateUrl: './pet-detail.component.html',
	styleUrls: ['./pet-detail.component.css']
})
export class PetDetailComponent implements OnInit {

	// Manually add Input, Output, and EventEmitter to
	//    the first import statement
	// This component will manage a single instance of Pet.
	// So we need an instance of Pet.
	//    For initial testing, we might want to fill
	//    ThePet with some actual temporary data
	// Three operations:
	// View the pet ("R")
	//    Also include a button to switch to edit mode
	//    and a button to delete (but don't code them yet.)
	// Edit the pet ("U")
	//    To make it editable, add a bool for editMode
	//    Make two sets of controls, one for view mode
	//    and one for edit mode, and make them toggle-able
	//    Get the edit button working to switch to edit mode
	//    Also need variables to bind the edit boxes to.
	//    "Bind" these variables to the controls.
	//    Remember you two sets of brackets, square and round.
	//         [(ngModel)]
	//    Now pre-populate the input boxes with the current
	//       values from the ThePet object.
	// Delete the pet ("D")
	//    Create an event emitter
	//    When the delete button is clicked, call the
	//       emitter's emit() function, passing up
	//       the object.
	// There won't be a "Create" part of CRUD
	// Let's add some styling to the .css file

	@Input() ThePet: Pet = {
		name: 'Mitten',
		species: 'cat',
		born: 1980
	}

	// editMode is used to control when parts of the UI
	// are showing or are hidden. Variables like this
	// are called part of the "ViewModel". This is a model
	// or data for manipulating the "view". This data
	// does not get stored in the database.

	editMode: boolean = false;
	editName: string = '';
	editSpecies: string = '';
	editBorn: number = 0;

	// Here's the event emitter. The event will be
	// called "delete" because that makes some sense.

	@Output() delete: EventEmitter<Pet> = new EventEmitter<Pet>();

	constructor() { }

	ngOnInit(): void {
	}

	goToEditMode() {
		this.editMode = true;
		// Prepopulate the edit boxes through these variables.
		this.editName = this.ThePet.name;
		this.editSpecies = this.ThePet.species;
		this.editBorn = this.ThePet.born;
	}

	cancel() {
		// Cancel is easy. Just go back to non-edit mode.
		this.editMode = false;
	}

	save() {
		// Two things: Save the edit boxes into the object
		// Go back to non-edit-mode.
		this.ThePet.name = this.editName;
		this.ThePet.species = this.editSpecies;
		this.ThePet.born = this.editBorn;
		this.editMode = false;
	}

	deleteMe() {
		// We want to test that the function is getting called,
		// so let's throw in an alert to test it.
		// After testing, comment or delete the alert. 
		//alert('Sending delete!');
		// Send the message! Send out the object with it as the payload.
		this.delete.emit(this.ThePet);
	}

}
