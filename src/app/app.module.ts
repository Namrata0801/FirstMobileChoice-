import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UsersModule } from "./users/users.module";
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from "./users/login/login.component";
import { SignupComponent } from "./users/signup/signup.component";
import { UserlistComponent } from "./userlist/userlist.component";


import { CarouselModule } from 'ngx-owl-carousel-o';
import { SmartphoneComponent } from './smartphone/smartphone.component';
import { FooterComponent } from './footer/footer.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductComponent } from './product-item/product/product.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentComponent } from './payment/payment.component';
import { OrderplacedComponent } from './orderplaced/orderplaced.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { DisplayimgComponent } from './displayimg/displayimg.component';

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    AdminComponent,
    HeaderComponent,
    MainComponent,
    SmartphoneComponent,
    FooterComponent,
    ProductItemComponent,
    ProductComponent ,
   
    LoginComponent,
    SignupComponent,
    CartComponent,
    CartItemComponent,
    CheckoutComponent,
    PaymentComponent,
    OrderplacedComponent,
    DashbordComponent,
    FileuploadComponent,
    DisplayimgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    CarouselModule ,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,


  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
