import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class VendureService {
  constructor(private apollo: Apollo) { }

  getProducts() {
    return this.apollo.query({
      query: gql`
        {
          products(options: { take: 100, skip: 0 }) {
            items {
              id
              name
            }
          }
        }
      `
    });
  }

  getProductDetails(productId: string) {
    return this.apollo.query({
      query: gql`
      query  {
        product(id: "${productId}") {
          id
          name
          description
          slug
          variants{
            price
            name
          }
        }
      }
      `
    });
  }
}