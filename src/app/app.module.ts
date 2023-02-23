import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ContentfulService } from './contentful.service';
import { BrandListComponent } from './brand-list/brand-list.component';
import { BrandOverviewComponent } from './brand-overview/brand-overview.component';

const routes: Routes = [
  // redirect from http://localhost:4200 to http://localhost:4200/brands
  { path: '', redirectTo: '/brands', pathMatch: 'full' },
  // show BrandListComponent page for url as http://localhost:4200/brands 
  { path: 'brands', component: BrandListComponent },
  // show BrandOverviewComponent page for url as http://localhost:4200/brand/3xcThESR49ZKEUfL8dyMq1
  { path: 'brand/:id', component: BrandOverviewComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    BrandListComponent,
    BrandOverviewComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [ContentfulService], // load the service
  bootstrap: [AppComponent],
})
export class AppModule {}
