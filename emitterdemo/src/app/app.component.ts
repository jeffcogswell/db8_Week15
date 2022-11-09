import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'emitterdemo';
    processMessage(message: string) {
        alert(`I just received this message from the child: ${message}`)
    }
}
