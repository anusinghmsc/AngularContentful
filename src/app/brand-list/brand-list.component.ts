import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css'],
})
export class BrandListComponent implements OnInit {
  // Map to hold selection status (true/false) for each brand id
  selectedBrandsMap: Map<string, boolean> = new Map();

  brands: Entry<any>[] = []; // Array of Entry or Content in Contentful to hold data received from Contentful

  // brands = Argos, Tesco, Currys, Sainsburys, Lidl

  constructor(
    private router: Router, // inject all dependencies for creating Router object
    private contentfulService: ContentfulService // inject all dependencies for creating Contentful Service object
  ) { }

  ngOnInit() {
    // get all the brands from Contentful and assign to brands variable 
    // using getBrands() function from Contentful Service

    // here we are consuming the data from promise returned by Contentful Service function
    this.contentfulService.getBrands().then((brands) => (this.brands = brands));
  }

  // route to http://localhost:4200/brand/3xcThESR49ZKEUfL8dyMq1
  // with brandID passed on clicking Brand Overview button 
  goToBrandOverviewPage(brandId: any) {
    this.router.navigate(['/brand', brandId]);
  }

  // update brand selection status from false to true and true to false on click
  updateSelection(id: string) {
    this.selectedBrandsMap.set(id, !this.selectedBrandsMap.get(id));
  }

  // get brand selection status as true or false
  isSelected(id: string) {
    return this.selectedBrandsMap.get(id);
  }
}
