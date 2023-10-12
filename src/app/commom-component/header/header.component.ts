import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {
  public totalItem : number = 0;
  public searchTerm : string ="";
  constructor(private cartservice : CartService){ }

  ngOnInit(): void {
    this.getNotify()
  }
  ngDoCheck(): void {
    this.getNotify()
  }

  getNotify(){
    let len = this.cartservice.getproduct()
    this.totalItem = len.length
  }

  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartservice.search.next(this.searchTerm);
  }
}
