import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appUnderline]',
})
export class UnderlineDirective {
  @Input() appUnderline = 'underline';
  @Input() decoration = 'overline';

  constructor(private elementRef: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.elementRef.nativeElement.style.textDecoration = this.decoration;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.elementRef.nativeElement.style.textDecoration = 'none';
  }
}
