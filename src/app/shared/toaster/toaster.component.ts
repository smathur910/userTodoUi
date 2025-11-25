import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../services/toast.service';
declare var bootstrap: any;

@Component({
  selector: 'app-toaster',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toaster.component.html',
  styleUrl: './toaster.component.css'
})
export class ToasterComponent {
  constructor(public toastService: ToastService) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.toastService.toasts.forEach((_, index) => {
        const toastEl = document.getElementById('toast-' + index);
        if (toastEl) {
          const toastBootstrap = new bootstrap.Toast(toastEl);
          toastBootstrap.show();
        }
      });
    });
  }
}
