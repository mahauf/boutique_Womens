import { Component, OnInit } from '@angular/core';
import { CartService } from './service/cart.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ecom';


  public totalItem : number =0;
  public searchTerm ! : string;
  // public filterCategory : any;
  // public productList : any;

  constructor(private cartService : CartService){}

  ngOnInit(): void {
    this.cartService.getProduct()
    .subscribe(res=>{
      this.totalItem = res.length;
      // this.filterCategory = res;
      // this.productList = res;
    })

  }

  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }

 

  // filter(category:string){
  //   this.filterCategory = this.productList
  //   .filter((a:any)=>{
  //     if(a.category == category || category == ''){
  //       return a;
  //     }
  //   })
  // }

}
