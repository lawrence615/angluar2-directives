import {Component} from 'angular2/core';

@Component({
    selector: 'my-structural-directives',
    template: `
        <section class="directive">
            <h2>*ngIf</h2>
            <div>
                Enter a number higher than 10
                <br>
                <input type="input" #number (keyup)="0">
            </div>
            <div *ngIf=" number.value > 10">
                Number is greater than 10
            </div>
        </section>
        <section class="directive">
            <h2>*ngFor</h2>
            <div>
                <ul>
                    <li *ngFor="#car of list #i = index">{{car}} {{i}}</li>
                </ul>
            </div>
        </section>
    `
})

export class StructuralDirectives {
    list = ['Mazda', 'Honda', 'Mitsubishi', 'Subaru', 'Toyota'];
}
