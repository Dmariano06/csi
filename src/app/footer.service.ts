import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FooterService {
  private hideFooterSubject = new BehaviorSubject<boolean>(true); // Toujours masquer le footer par défaut
  hideFooter$ = this.hideFooterSubject.asObservable();
  toggleFooter(hide: boolean): void {
    this.hideFooterSubject.next(hide);
  }
}