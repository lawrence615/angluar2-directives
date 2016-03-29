import {Component} from 'angular2/core';
import {UnlessDirective} from "./unless.directive";

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
        <section class="directive">
            <h2>[ngSwitch]</h2>
            <div>
                Enter red, blue or green
                <br>
                <br>
                <input type="text" #colour (keyup)="0">
            </div>
            <div [ngSwitch]="colour.value" *ngIf="colour.value != ''">
                <template [ngSwitchWhen]="'red'"><span style="color: red"><br>Colour is red</span></template>
                <template [ngSwitchWhen]="'blue'"><span style="color: blue"><br>Colour is blue</span></template>
                <template [ngSwitchWhen]="'green'"><span style="color: green"><br>Colour is green</span></template>
                <template ngSwitchDefault><span><br>Don't know the colour</span></template>
            </div>
        </section>
        <section class="directive">
            <h2>Custom Directive: *myUnless</h2>
            <div>
                Enter true or false
                <br>
                <input type="text" #condition (keyup)="0">
            </div>
            <div *myUnless="condition.value != 'false'">
                Only shown if 'false' was entered
            </div>
        </section>
    `,
    directives:[UnlessDirective]
})

export class StructuralDirectives {
    list = ['Mazda', 'Honda', 'Mitsubishi', 'Subaru', 'Toyota'];
}
