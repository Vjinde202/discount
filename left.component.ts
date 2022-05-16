import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {

   // productName:string = 'Tshirt'; //api  Spring REST
   status:boolean = false;  // api
   productStatus:boolean = false;
   products:Product[] = [];
 
   constructor() { 
     this.products.push(this.p1)
     }
      p1:Product = {
       productName:'Tshirt',
       ammount:2800,
       units:2
     }
     getDiscount(disType:string)
     {
       console.log('inside getDiscount '+disType)
     }
     doCalculate()
     {
      
     }
  
 
   ngOnInit(): void {
 
   }
 
 }//end of class
 interface Product
 {
   productName:string;
   ammount:number;
   units:number
 }
