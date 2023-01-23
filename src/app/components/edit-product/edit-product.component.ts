import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  id : any
  productDetails:any
  editedProduct!:FormGroup
  save :boolean = false

  constructor(private ps : ProductService, private fb : FormBuilder ,private route :ActivatedRoute , ) { }

  ngOnInit(): void {
this.id = this.route.snapshot.params['id']
this.ps.getProductById(this.id).subscribe(
  res=>{ this.productDetails = res
    console.log(this.productDetails)
    this.editedProduct.patchValue({
      title:this.productDetails.title,
      category:this.productDetails.category,
      price:this.productDetails.price,
      description:this.productDetails.description,
    })

  }

 
)

this.editedProduct = this.fb.group({
  image:[''],
  title:['',[Validators.required,Validators.minLength(3)]],
  category:['',[Validators.required,Validators.minLength(3)]],
  price:['',[Validators.required,Validators.minLength(3)]],
  description:['',[Validators.required,Validators.minLength(3)]],
})


  }
  onEdit(){
    console.log(this.editedProduct.value)
    this.ps.editProduct(this.id ,this.editedProduct.value ).subscribe(
      res=> this.save = true
    )
    
  }

}
