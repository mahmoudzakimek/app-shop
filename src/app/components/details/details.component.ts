import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  id: any;
  data: any ;
  pushedData:any = []

  constructor(
    private ps: ProductService,
    private route: ActivatedRoute,
    private cs: CartService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.viewDetail();
  }
  viewDetail() {
    this.ps.getProductById(this.id).subscribe((res) => {
      this.data = res;
    });
  }
  addToCart(product:any){
      this.pushedData.push(product)

  this.cs.cashedData.next(this.pushedData)

  }
  }


