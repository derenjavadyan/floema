import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { DetailsComponent } from './pages/details/details.component';
import { HomeComponent } from './pages/home/home.component';
import { NavigationComponent } from './partials/navigation/navigation.component';
import { PreloaderComponent } from './partials/preloader/preloader.component';
import { CollectionComponent } from './pages/collection/collection.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    DetailsComponent,
    HomeComponent,
    NavigationComponent,
    PreloaderComponent,
    CollectionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
