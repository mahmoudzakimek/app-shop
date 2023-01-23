import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { Router,NavigationStart, Event as NavigationEvent } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  productLength: any = [];
  filteredData: any = [];
  productCategories: any;
  url:any
  constructor(public cs: CartService, private ps: ProductService , private router :Router) {
  }

  ngOnInit(): void {

    this.router.events
          .subscribe(
            (event: NavigationEvent) => {
              if(event instanceof NavigationStart) {
                this.url = event.url
              }
            });
   
    this.ps.getProductCategories().subscribe((res) => {
      console.log(res);
      this.productCategories = res;
    });
  }
  getCategory(value: any) {
    let cat = value.target.value;
    console.log(cat);
    this.cs.search.emit(cat);
  }
}
