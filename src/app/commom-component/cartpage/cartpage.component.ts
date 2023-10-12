import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.css']
})
export class CartpageComponent implements OnInit {
  public products:any=[];

  public grandTotal!:number;

  constructor(private cartservice : CartService ){}
  ngOnInit(): void {
    this.products = this.cartservice.getproduct()
    // .subscribe((res:any)=>{
    //   this.products = res;
      this.grandTotal = this.cartservice.getTotalPrice();
    // })
  }
  removeItem(item:any){
    this.cartservice.removeCartItem(item);
  }

  emptycart(){
    this.cartservice.removeAllCart();
  }
}
