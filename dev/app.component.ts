import {Component} from 'angular2/core';
import {AttributeDirectives} from "./attribute-directives.component";
import {StructuralDirectives} from "./structural-directives.component";

@Component({
    selector: 'my-app',
    template: `
        <my-attribute-directives></my-attribute-directives>
        <br>
        <h1>Structural Directives</h1>
        <my-structural-directives></my-structural-directives>
    `,
    directives:[AttributeDirectives, StructuralDirectives]
})
export class AppComponent {

}
