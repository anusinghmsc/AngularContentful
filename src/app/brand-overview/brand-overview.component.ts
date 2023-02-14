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
  brand!: Entry<any>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contentfulService: ContentfulService
  ) {}

  ngOnInit() {
    const brandId = this.route.snapshot.paramMap.get('id');
    this.contentfulService.getBrand(brandId).then((brand) => {
      this.brand = brand;
    });
  }

  goToList() {
    this.router.navigate(['/brands']);
  }
}
