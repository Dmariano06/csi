import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

import { AnimationBuilder, animate, style } from '@angular/animations';

@Component({
  selector: 'app-blackhole',
  templateUrl: './blackhole.component.html',
  styleUrl: './blackhole.component.scss'
})
export class BlackholeComponent{
  @ViewChildren("cell")
  items!: QueryList<ElementRef>;
  @ViewChildren("element")
  itemsView!: QueryList<ElementRef>;
  timer = 600;
  timing = "600ms";
  animates = [0, 2, 7]
  images = [{src:"assets/img/illustrations/template.png"},{src:"assets/img/illustrations/template1.png"},{src:"assets/img/illustrations/therapy.png"},{src:"assets/img/illustrations/portfolio.png"},{src:"assets/img/illustrations/template3.png"},{src:"assets/img/illustrations/therapy.png"},{src:"assets/img/illustrations/template.png"},{src:"assets/img/illustrations/template4.png"},{src:"assets/img/illustrations/template5.png"}];
  

  cellWidth!: number;
  radius: number = 150;
  minScale: number = 0.5;

  get cellCount() {
    return this.items.length;
  }
  selectedIndex = 0;

  movements = [
    { pos: 0, right: [1, 2], left: [8, 7] },
    { pos: 2, right: [3, 4, 5, 6, 7], left: [1, 0] },
    { pos: 7, right: [8, 0], left: [6, 5, 4, 3, 2] }
  ];

  constructor(private builder: AnimationBuilder) {}

  animateViews(direction: string) {
    this.animates.forEach((x: number, index: number) => {
      const mov = this.movements.find(m => m.pos === x);
  
      if (mov) {
        const animations = (mov as any)[direction].map((m: number) => {
          const angle = (m * 2 * Math.PI) / 9;
          const scale = (1 + this.minScale) / 2 + (1 - this.minScale) / 2 * Math.cos(angle);
          const applystyle = {
            left: -this.cellWidth / 2 + this.radius * Math.sin(angle) + "px",
            transform: "scale(" + scale + ")",
            opacity:'1',
            position: "absolute",
            "z-index": Math.floor(100 * scale)
          };
          return animate(
            this.timer / (mov as any)[direction].length + "ms",
            style(applystyle)
          );
        });
  
        const myAnimation = this.builder.build(animations);
        const player = myAnimation.create(this.items.toArray()[index].nativeElement);
        player.onDone(() => (this.animates[index] = (mov as any)[direction][(mov as any)[direction].length - 1]));
        player.play();
      }
    });
  }
  
  animateCarousel() {
    this.items.forEach((item: ElementRef, i: number) => {
      const myAnimation = this.builder.build([
        animate(this.timing, style(this.getStyle(i)))
      ]);
      const player = myAnimation.create(item.nativeElement);
      player.play();
    });
  }

  getStyle(index: number): { [key: string]: string | number } {
    if (!this.cellCount) return {};
    const angle = ((index - this.selectedIndex) * 2 * Math.PI) / this.cellCount;
    const scale = (75 + 25 * Math.cos(angle)) / 100;
  
    return {
      left: `${-75 + 150 * Math.sin(angle)}px`,
      transform: `scale(${scale})`,
      position: "absolute",
      "z-index": Math.floor(100 * scale)
    };
  }

  prev() {
    this.selectedIndex--;
    this.animateCarousel();
    this.animateViews("right");
  }

  next() {
    this.selectedIndex++;
    this.animateCarousel();
    this.animateViews("left");
  }

  ngAfterViewInit() {
    this.cellWidth = this.itemsView.first.nativeElement.offsetWidth;
    this.animateCarousel();
    this.animateViews("left");
  }
}
