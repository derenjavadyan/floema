import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { CollectionComponent } from './pages/collection/collection.component';
import { DetailsComponent } from './pages/details/details.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'collection', component: CollectionComponent },
  { path: 'details', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
