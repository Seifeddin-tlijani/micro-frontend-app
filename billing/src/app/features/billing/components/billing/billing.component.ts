import { Component } from '@angular/core';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrl: './billing.component.css'
})
export class BillingComponent {
  totalDue = 0;
  lastPayment = 0;
  lastPaymentDate = new Date();
  paymentAmount = 0;
  selectedPaymentMethod = '';
  transactions: any[] = [];

  processPayment() {
    // Implementation here
  }
}
