import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageloaderService {

  constructor() { }

  preloadImage(imageUrl: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        resolve();
      };
      img.onerror = (error) => {
        reject(error);
      };
      img.src = imageUrl;
    });
  }
  
}
