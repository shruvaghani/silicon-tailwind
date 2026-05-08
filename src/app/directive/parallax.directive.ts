import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appParallax]',
  standalone: true,
})
export class ParallaxDirective {
  @Input() parallaxScale: number = 5;

  constructor(private elementRef: ElementRef<HTMLElement>) {}

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const element = this.elementRef.nativeElement;

    const rect = element.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = event.clientX - centerX;
    const distanceY = event.clientY - centerY;

    const percentX = distanceX / (rect.width / 2);
    const percentY = distanceY / (rect.height / 2);

    Array.from(element.children).forEach((child: Element) => {
      const childElement = child as HTMLElement;

      const depth = parseFloat(childElement.getAttribute('data-depth') || '0');

      const moveX = -percentX * this.parallaxScale * depth;
      const moveY = -percentY * this.parallaxScale * depth;

      childElement.style.transform = `translate3d(${moveX}%, ${moveY}%, 0)`;
    });
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    const element = this.elementRef.nativeElement;

    Array.from(element.children).forEach((child: Element) => {
      const childElement = child as HTMLElement;

      childElement.style.transform = `translate3d(0,0,0)`;
    });
  }
}
