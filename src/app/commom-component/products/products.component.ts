import { Component,OnInit} from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public productList :any ;
  public filterCategory : any;
  searchKey :string = "";
  constructor(private api:ApiService, private cartservice : CartService){}

  ngOnInit(): void{
    this.api.getproduct().subscribe(res=>{
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((a:any)=>{
        if(a.category === "women's clothing" || a.category === "men's clothing"){
          a.category = "fashion";
        }
        Object.assign(a,{quantity:1,total:a.price});
      });
      console.log(this.productList)
    });
    this.cartservice.search.subscribe(val=>{
    this.searchKey = val;
    })
    // this.searchKey = this.cartservice.search
  }

  addToCart(item:any){
    this.cartservice.addtocart(item);
  }
  filter(category:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.category == category || category == ""){
        return a;
      }
    })
  }
}
