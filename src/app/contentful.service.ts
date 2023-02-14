import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { environment } from '../environments/environment';

@Injectable()
export class ContentfulService {
  private client = createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token
  });

  constructor() { }

  getBrands(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'brand'
    }, query))
      .then(res => res.items);
  }

  getBrand(brandId: any): Promise<Entry<any>> {
    return this.client.getEntries(Object.assign({
     content_type: 'brand'
    }, {'sys.id': brandId}))
      .then(res => res.items[0]);
  }
}