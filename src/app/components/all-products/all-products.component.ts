import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent implements OnInit {
  allProducts: any = [];
  id: any;
  pushedData: any = [];

  filtredProd: any = [];
  constructor(
    private ps: ProductService,
    private route: ActivatedRoute,
    private cs: CartService
  ) {}

  ngOnInit(): void {

    let permission = ['admin']
    localStorage.setItem('permissions',JSON.stringify(permission) )

    this.id = this.route.snapshot.params['id'];
    this.ps.getAllProducts().subscribe((res: any) => {
      this.allProducts = res;
      console.log(res)
    });
    this.cs.search.subscribe((data) => {
      if (data == 'All') {
        this.ps.getAllProducts().subscribe((res: any) => {
          this.allProducts = res;
        });
      } else {
        this.ps.getProductFilter(data).subscribe((res) => {
          console.log(res);
          this.filtredProd = res;
          this.allProducts = this.filtredProd;
        });
      }
    });
  }
  addToCart(product: any) {
    // this.pushedData.push(product);

    if(this.cs.data.includes(product)){
      prompt('added befo')
    }else{
      this.cs.data.push(product);

    }
  }
}
