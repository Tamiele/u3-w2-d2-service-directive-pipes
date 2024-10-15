import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustom]',
})
export class CustomDirective {
  constructor(private ref: ElementRef) {}

  ngOnInit() {
    const randomColor = this.getRandomColor();

    // Applica il colore al testo dell'elemento
    this.ref.nativeElement.style.backgroundColor = randomColor;
  }

  private getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
