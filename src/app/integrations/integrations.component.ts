import { Component, ElementRef } from '@angular/core';


@Component({
  selector: 'app-integrations',
  templateUrl: './integrations.component.html',
  styleUrl: './integrations.component.scss'
})
export class IntegrationsComponent {
  constructor(private el: ElementRef) {}

  scrollParallax(event: WheelEvent, section: number): void {
    event.preventDefault(); // Empêche le défilement par défaut

    const deltaY = event.deltaY;
    const nextSection = section + (deltaY > 0 ? 1 : -1);

    if (nextSection > 0 && nextSection <= 3) {
      console.log(nextSection);
      console.log(deltaY);
      const nextElement = document.querySelector(`.parallax${nextSection}`) as HTMLElement;
      if (nextElement) {
        nextElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }
  
}
