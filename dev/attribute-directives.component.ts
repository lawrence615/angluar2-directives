import {Component} from 'angular2/core';
import {HighlightDirective} from "./highlight.directive";

@Component({
    selector:'my-attribute-directives',
    template:`
        <h5 myHighlight>
             Highlight me
        </h5>
    `,
    directives:[HighlightDirective]
})

export class AttributeDirectivesComponent{

}
