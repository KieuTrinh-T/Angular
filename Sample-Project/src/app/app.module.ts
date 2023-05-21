import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { GroupCustomerComponent } from './group-customer/group-customer.component';
import { GroupCustomer2Component } from './group-customer2/group-customer2.component';
import { MyComponentComponent } from './BaiTap/my-component/my-component.component';
import { BindingPropertyComponentComponent } from './BaiTap/binding-property-component/binding-property-component.component';
import { BindingClassComponentComponent } from './BaiTap/binding-class-component/binding-class-component.component';
import { BaiTap6Component } from './BaiTap/bai-tap6/bai-tap6.component';
import { BaiTap7Component } from './BaiTap/bai-tap7/bai-tap7.component';
import { BaiTap11Component } from './BaiTap/bai-tap11/bai-tap11.component';
import { BaiTap12Component } from './BaiTap/bai-tap12/bai-tap12.component';
import { BaiTap13Component } from './BaiTap/bai-tap13/bai-tap13.component';
import { ServiceProductImageDetailComponent } from './BaiTap/service-product-image-detail/service-product-image-detail.component';
import { ExerciseListComponent } from './BaiTap/exercise-list/exercise-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaiTap8Component } from './BaiTap/bai-tap8/bai-tap8.component';
import { BaiTap9Component } from './BaiTap/bai-tap9/bai-tap9.component';
import { BaiTap10Component } from './BaiTap/bai-tap10/bai-tap10.component';
import { Bai15Component } from './BaiTap/bai-tap15/bai15.component';
import { HttpClientModule } from '@angular/common/http';
import { BaiTap16Component } from './BaiTap/bai-tap16/bai-tap16.component';
import { BaiTap18Component } from './BaiTap/bai-tap18/bai-tap18.component';
import { BaiTap21Component } from './BaiTap/bai-tap21/bai-tap21.component';
import { BaiTap22Component } from './BaiTap/bai-tap22/bai-tap22.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {  MatFormFieldModule } from '@angular/material/form-field';
import {  MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button'
import {MatSelectModule} from '@angular/material/select'
import {MatRadioModule} from '@angular/material/radio'
import {MatCheckboxModule} from '@angular/material/checkbox';
import { DongABankComponent } from './BaiTap/dong-abank/dong-abank.component';
import { FakeProductComponent } from './BaiTap/fake-product/fake-product.component';
import { BitCoinComponent } from './BaiTap/bit-coin/bit-coin.component';
import { PublicApiComponent } from './BaiTap/public-api/public-api.component'
import {MatTableModule} from '@angular/material/table';
import { FashionComponent } from './BaiTap/fashion/fashion.component'
import { RouterModule } from '@angular/router';
import { FashionDetailComponent } from './BaiTap/fashion-detail/fashion-detail.component';
import { BookApiComponent } from './BaiTap/book-api/book-api.component';
import { BookDetailComponent } from './BaiTap/book-detail/book-detail.component';
import {MatCardModule} from '@angular/material/card';
import { BookNewComponent } from './BaiTap/book-new/book-new.component';
import { BakeryComponent } from './BaiTap/bakery/bakery.component';
import {MatIconModule} from '@angular/material/icon';
import { FashionNewComponent } from './BaiTap/fashion-new/fashion-new.component';
import { FashionUpdateComponent } from './BaiTap/fashion-update/fashion-update.component';
import { BaiTap66Component } from './BaiTap/bai-tap66/bai-tap66.component';
import { BookUpdateComponent } from './BaiTap/book-update/book-update.component';
import { BookDeleteComponent } from './BaiTap/book-delete/book-delete.component';
import { BaiTap67Component } from './BaiTap/bai-tap67/bai-tap67.component';
import { CartComponent } from './BaiTap/cart/cart.component';
@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    ListCustomerComponent,
    RoutingComponent,
    GroupCustomerComponent,
    GroupCustomer2Component,
    MyComponentComponent,
    BindingPropertyComponentComponent,
    BindingClassComponentComponent,
    BaiTap6Component,
    BaiTap7Component,
    BaiTap11Component,
    BaiTap12Component,
    BaiTap13Component,
    ServiceProductImageDetailComponent,
    ExerciseListComponent,
    BaiTap8Component,
    BaiTap9Component,
    BaiTap10Component,
    Bai15Component,
    BaiTap16Component,
    BaiTap18Component,
    BaiTap21Component,
    BaiTap22Component,
    DongABankComponent,
    FakeProductComponent,
    BitCoinComponent,
    PublicApiComponent,
    FashionComponent,
    FashionDetailComponent,
    BookApiComponent,
    BookDetailComponent,
    BookNewComponent,
    BakeryComponent,
    FashionNewComponent,
    FashionUpdateComponent,
    BaiTap66Component,
    BookUpdateComponent,
    BookDeleteComponent,
    BaiTap67Component,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatTableModule,
    MatCardModule,
    RouterModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
