import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoadingService } from "./loading-spinner.service";

@Component({
  selector: "app-loading-spinner",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./loading-spinner.component.html",
  styleUrls: ["./loading-spinner.component.css"],
})
export class LoadingSpinnerComponent {
  loadingService: LoadingService = inject(LoadingService);
  isLoading: boolean = false;

  ngOnInit(): void {
    this.loadingService.loading$.subscribe((value) => (this.isLoading = value));
  }
}
