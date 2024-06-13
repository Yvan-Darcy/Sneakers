import { CurrencyPipe, PercentPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section2',
  standalone: true,
  imports: [CurrencyPipe, PercentPipe],
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.css']
})
export class Section2Component implements OnInit {
  companyName = "SNEAKERS COMPANY";
  companyAttentionGrapper = "Fall Limited Edition <br>Sneakers";
  companyAttentionGrapperText = "These low-profile sneakers are your perfect casual wear<br>companion. Featuring a durable rubber outer sole, they'll<br>withstand everything the weather can offer";
  @Input() price = 250.00;
  @Input() discount = 0.5;
  cartAdd = "add to cart";
  quantity: number = 0;

  ngOnInit(): void {}

  incrementQuantity() {
    this.quantity++; 
  }

  decrementQuantity() {
    if (this.quantity > 0) {
      this.quantity--;
    }
  }
}
