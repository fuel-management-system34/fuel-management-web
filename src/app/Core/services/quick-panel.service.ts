// quick-panel.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class QuickPanelService {
  private _isOpen = new BehaviorSubject<boolean>(false);
  isOpen$ = this._isOpen.asObservable();

  open() {
    this._isOpen.next(true);
  }

  close() {
    this._isOpen.next(false);
  }

  toggle() {
    this._isOpen.next(!this._isOpen.getValue());
  }
}
