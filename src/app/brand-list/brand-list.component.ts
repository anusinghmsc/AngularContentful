import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})

export class BrandListComponent implements OnInit {

  brands: Entry<any>[] = [];

  constructor(private router: Router, private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.contentfulService.getBrands()
      .then(brands => this.brands = brands);
  }

  goToBrandOverviewPage(brandId: any) {
    this.router.navigate(['/brand', brandId]);
  }

}