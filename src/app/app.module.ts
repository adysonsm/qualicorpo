import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, ROUTES } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componets/header/header.component';
import { HomeComponent } from './home/home.component';
import { ServiceService } from './services/service.service';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './componets/footer/footer.component';
import { ListPlansComponent } from './componets/list-plans/list-plans.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ListPlansComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    // RouterModule.forRoot(ROUTES)
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
