import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResizeServiceService {

  checkWindowSize(numberofcells:number = 3) {
    const size = window.innerWidth;
    if (size <= 991.98) {
      numberofcells = 1;
    }
    return numberofcells;
  }
}
