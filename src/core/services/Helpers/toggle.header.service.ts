import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleHeaderService {

  private toggleHeader = new BehaviorSubject<boolean>(false);
  currentHeader = this.toggleHeader.asObservable();

  constructor() { }

  changeHeader(message: boolean) {
    this.toggleHeader.next(message)
  }
}
