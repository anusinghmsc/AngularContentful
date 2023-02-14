import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ContentfulService } from './contentful.service';
import { BrandListComponent } from './brand-list/brand-list.component';
import { BrandOverviewComponent } from './brand-overview/brand-overview.component';
import { MdToHtmlPipe } from './md-to-html.pipe';

const routes: Routes = [
  { path: '', redirectTo: '/brands', pathMatch: 'full' },
  { path: 'brands', component: BrandListComponent },
  { path: 'brand/:id', component: BrandOverviewComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    BrandListComponent,
    BrandOverviewComponent,
    MdToHtmlPipe,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [ContentfulService],
  bootstrap: [AppComponent],
})
export class AppModule {}
