import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { LoaderService } from '../../services/loader/loader.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html'
})
export class LoaderComponent implements AfterViewInit, OnDestroy {
  /** To show or hide loader */
  public isLoading: boolean;
  private destroy: Subject<void>;
  constructor(private loader: LoaderService) {
    this.isLoading = false;
    this.destroy = new Subject();
  }

  ngAfterViewInit(): void {
    this.loader.isLoading.pipe(takeUntil(this.destroy)).subscribe((val: boolean) => {
      setTimeout(() => {
        this.isLoading = val, 100;
      });
    });
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.unsubscribe();
  }
}
