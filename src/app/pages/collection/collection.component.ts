import { Component } from '@angular/core';

interface Collection {
  label: string;
  title: string;
}

interface Gallery {
  link: string;
  img: string;
  article: galleryItems[];
}

interface galleryItems {
  title: string;
  desc: string;
}

//

interface Content {
  title: string;
  desc: string;
}

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'],
})
export class CollectionComponent {
  public collectionTitles: Collection[] = [
    {
      label: 'collection one',
      title: 'Vita',
    },
    {
      label: 'collection two',
      title: 'Aria',
    },
    {
      label: 'collection three',
      title: 'Ondole',
    },
    {
      label: 'collection four',
      title: 'Treo',
    },
  ];

  public collectionGallery: Gallery[] = [
    {
      link: 'asd',
      img: '../../../assets/img/gallery/photo.png',
      article: [
        { title: 'asd', desc: 'asd' },
        { title: 'asd', desc: 'asd' },
      ],
    },
    {
      link: 'asd',
      img: '../../../assets/img/gallery/photo.png',
      article: [
        { title: 'asd', desc: 'asd' },
        { title: 'asd', desc: 'asd' },
      ],
    },
    {
      link: 'asd',
      img: '../../../assets/img/gallery/photo.png',
      article: [
        { title: 'asd', desc: 'asd' },
        { title: 'asd', desc: 'asd' },
      ],
    },
  ];
}
