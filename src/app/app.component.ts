import { Component, HostListener } from '@angular/core';
import { Subscription } from 'rxjs';
import { FooterService } from './footer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  hideFooter = false;
  private subscription: Subscription;

  constructor(private footerService: FooterService) {
    this.subscription = this.footerService.hideFooter$.subscribe((hide) => {
      this.hideFooter = hide;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
