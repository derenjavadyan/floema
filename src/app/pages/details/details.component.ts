import { Component, OnInit } from '@angular/core';
import { ProductDetail } from 'service/products.model';
import { ProductsService } from 'service/products.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  product?: ProductDetail;
  myId: string = '2';

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.product = this.productsService.filterProduct(this.myId);
  }
}
