import { Directive, ElementRef, OnInit } from "@angular/core";
import { importExpr } from "@angular/compiler/src/output/output_ast";

@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit
{
    constructor(private elementRef: ElementRef){
    }
    ngOnInit() {
            this.elementRef.nativeElement.style.backgroundColor = 'green';
    } 
}