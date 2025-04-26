import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { ProductsDashboardComponent } from './shared/components/products-dashboard/products-dashboard.component';
import { ProductCardComponent } from './shared/components/products-dashboard/product-card/product-card.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './shared/components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsDashboardComponent,
    ProductCardComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
