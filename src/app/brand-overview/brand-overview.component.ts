import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-brand-overview',
  templateUrl: './brand-overview.component.html',
  styleUrls: ['./brand-overview.component.css'],
})
export class BrandOverviewComponent implements OnInit {
  brand!: Entry<any>; // Entry is equal to Content in Contentful

  constructor(
    private route: ActivatedRoute, // inject all dependencies for creating ActivatedRoute object
    private router: Router,  // inject all dependencies for creating Router object
    private contentfulService: ContentfulService // inject all dependencies for creating Contentful Service object
  ) {}

  ngOnInit() {
    // get id from browser URL
    // http://localhost:4200/brand/3xcThESR49ZKEUfL8dyMq1
    // where id is 3xcThESR49ZKEUfL8dyMq1
    const brandId = this.route.snapshot.paramMap.get('id');

    this.contentfulService.getBrand(brandId).then((brand) => {
      this.brand = brand; // initialize value of brand
    });
  }

  // route to /brands page on Back To List button click
  goToList() {
    this.router.navigate(['/brands']);
  }
}
