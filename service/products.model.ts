export interface ProductDetail {
  id: string;
  img: string;
  collection: string;
  title: string;
  highlightIcon: highlightIcon[];
  highlightText: highlightText[];
  itemTitle: itemTitle[];
  itemDescription: itemDescription[];
  shop: string;
}

interface highlightIcon {
  icon: string;
}

interface highlightText {
  text: string;
}

interface itemTitle {
  title: string;
}

interface itemDescription {
  desc: string;
}
