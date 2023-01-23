import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  addedProducts!:FormGroup

  constructor(private fb :FormBuilder , private ps : ProductService) { }

  ngOnInit(): void {
    this.addedProducts = this.fb.group({
      image:[''],
      title:['',[Validators.required,Validators.minLength(3)]],
      category:['',[Validators.required,Validators.minLength(3)]],
      price:['',[Validators.required,Validators.minLength(3)]],
      description:['',[Validators.required,Validators.minLength(3)]],
    })
  }
  submit( ){
    let formData = {
      ...this.addedProducts.value
    }
     console.log(formData)
    
 this.ps.addProduct(formData).subscribe(res=>{
  console.log(res)
 })

  }

}
