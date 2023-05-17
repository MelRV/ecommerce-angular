import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ProductsService } from '../services/products.service'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit{
  products: any = [];
   constructor(private productsService: ProductsService){}
   ngOnInit(): void{
     this.showAllProducts()
   }

  showAllProducts(){
    this.productsService.showProducts().subscribe({
      next:(data:any)=>{
        this.products = data.products

      }
    })
  }
}
