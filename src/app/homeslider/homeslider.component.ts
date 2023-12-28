import { Component, ElementRef, HostListener, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FooterService } from '../footer.service';

@Component({
  selector: 'app-homeslider',
  templateUrl: './homeslider.component.html',
  styleUrl: './homeslider.component.scss'
})
export class HomesliderComponent {

  constructor(private footerService: FooterService) {}

  ngOnInit(): void {
 
    this.footerService.toggleFooter(true);
  }
 
  @ViewChildren('page')
  pages!: QueryList<ElementRef>;
  @ViewChild('prev')
  prev!: ElementRef;
  @ViewChild('next')
  next!: ElementRef;

idlePeriod = 100;
animationDuration = 1050;
lastAnimation = 0;
index = 0;

togglePageContent(index: number, state: string) {
  const page = this.pages.toArray()[index];
  if (page) {
    const pageContent = page.nativeElement.querySelector('.page-content');
    if (pageContent) {
      if (state === 'show') {
        pageContent.classList.add('show');
      } else {
        pageContent.classList.remove('show');
      }
    }
  }
}

ngAfterViewInit() {
  this.togglePageContent(0, 'show');
}

clickPrev() {
  if (this.index < 1 || !this.pages) return;

  this.togglePageContent(this.index, 'hide');
  this.index--;

  this.pages.forEach((page, i) => {
    if (i === this.index) {
      this.togglePageContent(i, 'show');

      const pageElement = page?.nativeElement;
      if (pageElement) {
        pageElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
}

clickNext() {
  if (this.index > 1 || !this.pages) return;

  this.togglePageContent(this.index, 'hide');
  this.index++;

  this.pages.forEach((page, i) => {
    if (i === this.index) {
      this.togglePageContent(i, 'show');

      const pageElement = page?.nativeElement;
      if (pageElement) {
        pageElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
}

@HostListener('wheel', ['$event'])
onMouseWheel(event: WheelEvent) {
  const delta = event.deltaY;
  const timeNow = new Date().getTime();

  if (timeNow - this.lastAnimation < this.idlePeriod + this.animationDuration) {
    event.preventDefault();
    return;
  }

  if (delta > 0 && this.next) {
    this.next.nativeElement.click();
  } else if (delta < 0 && this.prev) {
    this.prev.nativeElement.click();
  }

  this.lastAnimation = timeNow;
}
}