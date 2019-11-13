import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { BookingComponent } from './booking/booking.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},{path:'search',component:SearchComponent},{path:'signup',component:SignupComponent},
  {path:'',redirectTo:'search',pathMatch:'full'},{path:'booking',component:BookingComponent},
  {path:'admin',component:AdminComponent}
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

