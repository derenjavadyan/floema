import { Injectable } from '@angular/core';
import { ProductDetail } from './products.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  productList: ProductDetail[] = [
    {
      id: '1',
      img: '../../../../src/assets/img/gallery/1.png',
      collection: 'vita collection',
      title: 'silver necklace',
      highlightIcon: [
        { icon: '../src/assets/icons/iconOne.svg' },
        { icon: '../src/assets/icons/iconTwo.svg' },
      ],
      highlightText: [
        {
          text: 'The necklace is 44 cm long. The setting is 5 mm long and 4 mm wide.',
        },
        {
          text: 'Silver. Ruby Stone',
        },
      ],
      itemTitle: [
        {
          title: 'info',
        },
        {
          title: 'You should know',
        },
      ],
      itemDescription: [
        {
          desc: 'This luminous necklace, called “Venetian” is perfect for the four thread woven bezel that protects a wonderful intense red ruby. The necklace is completely made in Sterling Silver.',
        },
        {
          desc: 'Each FLOEMA jewel is entirely handmade: any difference from the original picture evidences the unique and artisanal manufacture of the piece.',
        },
      ],
      shop: 'asd',
    },

    {
      id: '2',
      img: '../../../assets/img/gallery/photo.png',
      collection: 'vita collection',
      title: 'silver necklace',
      highlightIcon: [
        { icon: 'icons/iconOne.svg' },
        { icon: 'icons/iconTwo.svg' },
      ],
      highlightText: [
        {
          text: 'The necklace is 44 cm long. The setting is 5 mm long and 4 mm wide.',
        },
        {
          text: 'Silver. Ruby Stone',
        },
      ],
      itemTitle: [
        {
          title: 'info',
        },
        {
          title: 'You should know',
        },
      ],
      itemDescription: [
        {
          desc: 'This luminous necklace, called “Venetian” is perfect for the four thread woven bezel that protects a wonderful intense red ruby. The necklace is completely made in Sterling Silver.',
        },
        {
          desc: 'Each FLOEMA jewel is entirely handmade: any difference from the original picture evidences the unique and artisanal manufacture of the piece.',
        },
      ],
      shop: 'asd',
    },
  ];

  constructor() {}

  filterProduct(f: string): ProductDetail | undefined {
    return this.productList.find((product) => {
      return product.id === f;
    });
  }
}
