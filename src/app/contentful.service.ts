import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { environment } from '../environments/environment';

@Injectable() // needed for dependency injection
export class ContentfulService {

  // this client will call API endpoint to get data using HTTP GET Request : cdn.contentful.com
  private client = createClient({
    space: environment.contentful.spaceId, // use space ID value from environemnt file
    accessToken: environment.contentful.token, // use token value from environemnt file
  });

  constructor() {}

  // interface for brand content provided by contentful library/dependency
  //      brand = {
  //          fields : {
  //              name : string;
  //              url: string;
  //              image.fields.file.url: string;
  //              info: string;
  //              overview: string;
  //          }
  //          sys : {
  //              id : string;
  //          }
  //      }

  // sample JSON data for Argos
  //      Argos = {
  //          fields : {
  //              name : 'Argos'  
  //              url : 'http://www.argos.co.uk'
  //              image.fields.file.url : 'http://images.ctfassets.net/14b5zyzg34yv/6ZeZKNJiub9Gcbe7PxOa8i/4eb530214ee69acbfaa23c205a8940b5/argos.png'
  //              info : 'Argos is a catalogue retailer operating in the United Kingdom.....'
  //              overview : 'Shop our products online across tech, home, garden, appliances, toys, video games & more.......'
  //          }
  //          sys : {
  //              id : '3xcThESR49ZKEUfL8dyMq1'
  //          }
  //      }
  
  // get list of brands from contentful
  getBrands(query?: object): Promise<Entry<any>[]> {
  //  A promise is an object in JavaScript that will produce a value sometime in the future
  // Here it is promising to return array of all contentful data 

  // [Argos, Tesco, Lidl, Currys, Sainsburys]

    return this.client
      .getEntries(
        Object.assign(
          {
            content_type: 'brand',
          },
          query
        )
      )
      .then((res) => res.items);
  }

  // get value for brand using id from contentful, for example id for Argos is 3xcThESR49ZKEUfL8dyMq1
  getBrand(brandId: any): Promise<Entry<any>> {
  // A promise is an object in JavaScript that will produce a value sometime in the future
  // Here it is promisng to return contentful data for a matching id

    return this.client
      .getEntries(
        Object.assign(
          {
            content_type: 'brand',
          },
          { 'sys.id': brandId } // get data from contentful matching the id
        )
      )
      .then((res) => res.items[0]);
  }
}
