import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { ListingComponent } from './listing/listing.component';
import { InfoComponent } from './info/info.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { MycartComponent } from './mycart/mycart.component';
import { MyordersComponent } from './myorders/myorders.component';
import { MywishlistComponent } from './mywishlist/mywishlist.component';
import { MyaddressesComponent } from './myaddresses/myaddresses.component';
import { ProductsComponent } from './products/products.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { SinginComponent } from './auth/singin/singin.component';
import { SignupComponent } from './auth/signup/signup.component';


const routes: Routes = [
  {path: '', redirectTo:'/home',pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'men', component: MenComponent},
  {path: 'women', component: WomenComponent},
  {path: 'listing', component: ListingComponent},
  {path: 'info', component: InfoComponent,
  children:[
    {path:'myprofile',component: MyprofileComponent},
    {path:'mycart', component: MycartComponent},
    {path:'myorders', component: MyordersComponent},
    {path:'mywishlist', component: MywishlistComponent},
    {path:'myaddresses', component: MyaddressesComponent}
  ]
},
{path: 'checkout', component: CheckoutComponent},
{path:'products', component: ProductsComponent},
{path:'login', component: LoginComponent},
{path: 'signup', component: SignupComponent},
{path: 'signin', component: SinginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [HomeComponent,MenComponent,WomenComponent,ListingComponent,InfoComponent,MycartComponent,MyprofileComponent,MyordersComponent,MywishlistComponent,MyaddressesComponent, ProductsComponent,CheckoutComponent,LoginComponent,SignupComponent,SinginComponent]
