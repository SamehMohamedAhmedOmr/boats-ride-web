import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {AuthNotice} from "../../../Models/Base/auth-notice.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthNoticeService {
  onNoticeChanged$: BehaviorSubject<AuthNotice>;

  constructor() {
    // @ts-ignore
    this.onNoticeChanged$ = new BehaviorSubject(null);
  }

  setNotice(message: string, type?: string) {
    const notice: AuthNotice = {
      message: message,
      type: type
    };
    this.onNoticeChanged$.next(notice);
  }
}
