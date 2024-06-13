import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-invalid-form-modal",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./invalid-form-modal.component.html",
  styleUrls: ["./invalid-form-modal.component.css"],
})
export class InvalidFormModalComponent {
  @Input() show!: boolean;
  @Input() form!: FormGroup;
  @Output() closeModalEvent = new EventEmitter<void>();

  closeModal() {
    this.closeModalEvent.emit();
  }
}
