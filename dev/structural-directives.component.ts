import {Component} from 'angular2/core';

@Component({
    selector: 'my-structural-directives',
    template: `
        <section class="directive">
            <h2>*ngif</h2>
            <div>
                Enter a number higher than 10
                <br>
                <input type="input" #number (keyup)="0">
            </div>
            <div *ngIf=" number.value > 10">
                Number is greater than 10
            </div>
        </section>
    `
})

export class StructuralDirectives {

}
