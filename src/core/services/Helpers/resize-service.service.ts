import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResizeServiceService {

  checkWindowSize() {
    const size = window.innerWidth;
    let numberofcells = 3;
    if (size <= 991.98) {
      numberofcells = 1;
    }
    return numberofcells;
  }
}
