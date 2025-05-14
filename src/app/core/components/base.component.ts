import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export abstract class BaseComponent implements OnDestroy {
  protected readonly _OnDestroy$: Subject<void> = new Subject<void>();

  constructor() {}

  ngOnDestroy(): void {
    this._OnDestroy$.next();
    this._OnDestroy$.complete();
  }
}
