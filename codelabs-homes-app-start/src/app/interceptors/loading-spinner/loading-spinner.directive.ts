import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
  OnDestroy,
} from "@angular/core";
import { Subscription } from "rxjs";
import { LoadingService } from "./loading-spinner.service";

@Directive({
  selector: "[appLoading]",
  standalone: true,
})
export class LoadingSpinnerDirective implements OnDestroy {
  private loadingSubscription: Subscription;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private loadingService: LoadingService
  ) {
    this.loadingSubscription = this.loadingService.loading$.subscribe(
      (isLoading) => {
        this.updateView(isLoading);
      }
    );
  }

  private updateView(isLoading: boolean): void {
    this.viewContainer.clear();
    if (!isLoading) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

  ngOnDestroy(): void {
    if (this.loadingSubscription) {
      this.loadingSubscription.unsubscribe();
    }
  }
}
