import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private moveDivSubject = new BehaviorSubject<string>('default');
  moveDivAction$ = this.moveDivSubject.asObservable();

  moveDiv(action: string) {
    this.moveDivSubject.next(action);
  }
}
