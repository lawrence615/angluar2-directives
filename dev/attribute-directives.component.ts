import {Component} from 'angular2/core';
import {HighlightDirective} from "./highlight.directive";

@Component({
    selector:'my-attribute-directives',
    template:`
        <h5 [myHighlight]="'red'">
             Highlight me
        </h5>
        <div [myHighlight]="'yellow'">
            Highlight me Also
        </div>
    `,
    directives:[HighlightDirective]
})

export class AttributeDirectives{

}
