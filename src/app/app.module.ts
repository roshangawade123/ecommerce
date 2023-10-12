import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartpageComponent } from './commom-component/cartpage/cartpage.component';
import { HeaderComponent } from './commom-component/header/header.component';
import { ProductsComponent } from './commom-component/products/products.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedPipe } from './filter/shared.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CartpageComponent,
    HeaderComponent,
    ProductsComponent,
    SharedPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
