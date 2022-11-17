export interface ProductDetail {
  id: string;
  img: string;
  collection: string;
  title: string;
  highlights: highlights[];
  items: items[];
  shop: string;
}

interface highlights {
  icon: string;
  text: string;
}

interface items {
  title: string;
  desc: string;
}


