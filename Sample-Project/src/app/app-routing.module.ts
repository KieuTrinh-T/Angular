import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaiTap13Component } from './BaiTap/bai-tap13/bai-tap13.component';
import { BitCoinComponent } from './BaiTap/bit-coin/bit-coin.component';
import { BookApiComponent } from './BaiTap/book-api/book-api.component';
import { BookDetailComponent } from './BaiTap/book-detail/book-detail.component';
import { BookNewComponent } from './BaiTap/book-new/book-new.component';
import { ExerciseListComponent } from './BaiTap/exercise-list/exercise-list.component';
import { FashionDetailComponent } from './BaiTap/fashion-detail/fashion-detail.component';
import { FashionComponent } from './BaiTap/fashion/fashion.component';
import { ServiceProductImageDetailComponent } from './BaiTap/service-product-image-detail/service-product-image-detail.component';
import { CustomerComponent } from './customer/customer.component';
import { GroupCustomerComponent } from './group-customer/group-customer.component';
import { GroupCustomer2Component } from './group-customer2/group-customer2.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { FashionNewComponent } from './BaiTap/fashion-new/fashion-new.component';
import { FashionUpdateComponent } from './BaiTap/fashion-update/fashion-update.component';
import { BaiTap66Component } from './BaiTap/bai-tap66/bai-tap66.component';
import { BookUpdateComponent } from './BaiTap/book-update/book-update.component';
import { BookDeleteComponent } from './BaiTap/book-delete/book-delete.component';

const routes: Routes = [
  {path: "customer", component: CustomerComponent},
  {path: "listCustomer", component: ListCustomerComponent},
  {path:"groupCustomer", component: GroupCustomerComponent},
  {path:"groupCustomer2", component: GroupCustomer2Component},
  {path:'service-product-image-event', component: BaiTap13Component},
  {path:'service-product-image-detail/:id', component: ServiceProductImageDetailComponent},
  {path:'exercise-list', component: ExerciseListComponent},
  {path: 'exercise-list/fashions', component: FashionComponent},
  {path:'exercise-list/bitcoin', component: BitCoinComponent},
  {path:'exercise-list/fashions/:id', component: FashionDetailComponent},
  {path:'exercise-list/books', component: BookApiComponent},
  {path:'exercise-list/book-detail', component: BookDetailComponent},
  {path:'exercise-list/book-update', component: BookUpdateComponent },
  {path:'exercise-list/book-new', component: BookNewComponent },
  {path:'exercise-list/book-delete', component: BookDeleteComponent },
  {path:'exercise-list/fashion-new', component: FashionNewComponent },
  {path:'exercise-list/fashion-update', component: FashionUpdateComponent },
  {path:'exercise-list/cookie-login', component: BaiTap66Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [
  CustomerComponent,
  ListCustomerComponent,
  GroupCustomerComponent,
  GroupCustomer2Component,
  BaiTap13Component,
  ServiceProductImageDetailComponent,
  ExerciseListComponent

]

