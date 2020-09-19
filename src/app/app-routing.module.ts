import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from "./admin/admin.component";
import { UserlistComponent } from "./userlist/userlist.component";
import { CartItemComponent } from "../app/cart/cart-item/cart-item.component";


import { HeaderComponent } from "../app/header/header.component";
import { MainComponent } from "../app/main/main.component";
import { LoginComponent } from "./users/login/login.component";
import { SignupComponent } from "./users/signup/signup.component";
import { SmartphoneComponent } from "./smartphone/smartphone.component";
import { FooterComponent } from "../app/footer/footer.component";
import{ PaymentComponent} from "../app/payment/payment.component";
import{ CheckoutComponent} from "../app/checkout/checkout.component";
import{ OrderplacedComponent } from "../app/orderplaced/orderplaced.component";
import { FileuploadComponent } from "../app/fileupload/fileupload.component";
import { DisplayimgComponent } from "../app/displayimg/displayimg.component";
const routes: Routes = [
  {
    path:'',
    redirectTo: 'main',
    pathMatch:'full'

  },
  
  {
    path:'main',
    component: MainComponent
  },
  {
    path:'userlist',
    component: UserlistComponent
  },
  {
    path:'admin',
    component: AdminComponent
  },
  {
    path:'header',
    component: HeaderComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'signup',
    component: SignupComponent
  },
  {
    path:'smartphone',
    component: SmartphoneComponent
  },
  {
    path:'footer',
    component: FooterComponent
  },
  {
    path:'cart-item',
    component: CartItemComponent
  },
  {
    path:'checkout',
    component:CheckoutComponent
  },
  {
    path:'payment',
    component: PaymentComponent
  },
  {
    path:'orderplaced',
    component: OrderplacedComponent
  },
  {
    path:'fileupload',
    component: FileuploadComponent
  },
  {
    path:'displayingimg',
    component: DisplayimgComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
