import { Directive } from '@angular/core';
import { Renderer, ElementRef } from '@angular/core';

@Directive({
    selector: '[highlight]'
})

export class HighlightDirective {
    constructor(private renderer: Renderer, private el: ElementRef) {
        renderer.setElementStyle(el.nativeElement,'fontSize','125%');
        renderer.setElementStyle(el.nativeElement,'color','black');
        
     }
}