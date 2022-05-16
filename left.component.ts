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
       
      console.log('inside doCalculate ');
      let amount=2800;
      let quantity=2;
       let addquantity=(amount*quantity);
       let discount=(addquantity)*15/100;
       let total=addquantity-discount;
       let gst=(total)*12/100;
       let result=total+gst;
      
      
      
      console.log('total price   '+result);

         
      
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
