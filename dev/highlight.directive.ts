import {Directive} from 'angular2/core';
import {ElementRef} from "angular2/core";
import {OnInit} from "angular2/core";
/**
 * Created by Lawrence on 3/22/16.
 */

@Directive({
    selector: '[myHighlight]',
})

export class HighlightDirective implements OnInit {
    private _defaultColour: 'green';

    constructor(private _elRef: ElementRef) {}


    ngOnInit():any {
        this._elRef.nativeElement.style.backgroundColor = this._defaultColour;
    }

}