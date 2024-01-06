import { Component, HostListener } from '@angular/core';
import { Subscription } from 'rxjs';
import { FooterService } from './footer.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  hideFooter = false;
  private subscription: Subscription;

  constructor(private footerService: FooterService,private router: Router) {
    this.subscription = this.footerService.hideFooter$.subscribe((hide) => {
      this.hideFooter = hide;
    });
  }
 scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

ngOnInit() {
  this.router.events.subscribe((event) => {
    if (event instanceof NavigationEnd) {
      this.scrollToTop();
    }
  });
}

onactivate(event: any) {


window.scroll(0,0);

   
}

navigateTo(route: string) {
  this.scrollToTop();
  this.router.navigate([route]);
}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    console.log(this.isScrolled);
    this.isScrolled = window.scrollY > 0;
  }
}
