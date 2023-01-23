import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnInit {
  data :any = []
  cashedData:BehaviorSubject<any> = new BehaviorSubject<any>([])
  cashedDataObs = this.cashedData.asObservable()
  counter : EventEmitter<any>=new EventEmitter<any>()
  search : EventEmitter<any>=new EventEmitter<any>()
 constructor(private ps:ProductService) { }
  ngOnInit(): void {

  }


}
