import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class LoaderService {
  /** Subject to show/hide loader */
  public isLoading = new Subject<boolean>();

  constructor() {
  }

  /** To show the loader */
  public show(): void {
    this.isLoading.next(true);
  }

  /** To hide the loader */
  public hide(): void {
    this.isLoading.next(false);
  }
}
