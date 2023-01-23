import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  productsPushed: any = [];
  totalPrice: any;


  constructor(public cs: CartService) {}

  ngOnInit(): void {
    this.cs.data =  this.cs.data.map((elem:any)=>{
      elem.quantity = 1
      return elem
    })
    console.log(this.cs.data);
    // this.productsPushed = this.cs.data
    // console.log(this.productsPushed)
    // this.cs.cashedDataObs.subscribe((res: any) => {
    //   this.productsPushed = res;
    //   // this.cs.counter.emit(this.productsPushed)
    //  });
  }
  onDelete(index: any) {
    this.cs.data.splice(index, 1);
    this.total()
    // this.productsPushed = this.productsPushed.filter(
    //   (elems:any)=>{
    //     this.cs.counter= this.productsPushed
    //     return elems.id !== product.id
    //   }
    // )
  }
  emptyAll() {
    this.cs.data = [];
  }
  total() {

    if (this.cs.data.length>0) {
      let priceArr = this.cs.data.map((ele: any) => {
        return ele.price;
      });
      let total = priceArr.reduce((acc: any, curr: any) => acc + curr);
      console.log(total);
      this.totalPrice = total;

    }else{
      confirm('there is no item')
    }
    if(this.cs.data.length <= 0){
      this.totalPrice = 0
    }
  }
  add(item : any){
     item.quantity++
       item.price *=  item.quantity
       this.total()



  }
  reduce(item:any) : any{
    if (item.quantity !==1) {
     item.quantity--
     
   return  item.price *=  item.quantity

    //  this.total()

    }


  }
}
