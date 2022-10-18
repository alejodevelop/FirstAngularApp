import { Component } from '@angular/core';

@Component({
    selector: 'hello-world',
    templateUrl: './primer.component.html',
    styleUrls: ['./primer.component.css'],
    // template: '<h1>hola</h1>',
    // styles: ['h1 {background: #000; color: #fff;}']
})
export class HelloWorld {
    title = "Welcome to Angular";

}