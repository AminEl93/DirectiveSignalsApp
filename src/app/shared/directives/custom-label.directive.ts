import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
    selector: '[customLabel]'
})

export class CustomLabelDirective implements OnInit {
    
    private htmlElement?: ElementRef<HTMLElement>;
    private _color: string = 'red';

    @Input() set color(value: string) {
        this._color = value;
        this.setStyle();
    }

    constructor(private element: ElementRef<HTMLElement>) {
        this.htmlElement = element;
    }
    
    ngOnInit(): void {
        this.setStyle();
    }

    setStyle(): void {
        if (!this.htmlElement) return;    
        this.htmlElement!.nativeElement.style.color = this._color;
    }
}