import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.css']
})
export class ChildComponent {

    // I picked the name "sender" myself, somewhat arbitrary.
    // But that's the name the parent component will use.
    @Output() sender: EventEmitter<string> = new EventEmitter<string>();

    sendMessage() {
        // We'll use the event emitter to send a message to the parent
        // We're just sending a string.
        this.sender.emit("Hello!");
    }

}
