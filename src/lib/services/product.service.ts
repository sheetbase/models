import {
  Ids,
  Status,
  Authors,
  Images,
  Content,
  Parents,
  Relationships,
  Taxonomies,
  Rating,
  Sharing,
  Statistics,
  Extras,
} from '../types/shared.type';
import {Post} from './post.service';

export interface ProductOption {
  title?: string;
  items: {
    [$key: string]: ProductOptionItem;
  };
}

export interface ProductOptionItem {
  title: string;
  content?: unknown; // color code, ...
  offset?: number; // positive or nagative, original price + this
}

export interface ProductVariant extends Images {
  title: string; // Product 1 (XL, Blue)
  sku: string; // product SKU + options ids: P001-XL-B
  price?: number;
  discounted?: number;
  upc?: number | string;
  // Images
  stockCount?: number;
  soldCount?: number;
}

export interface Product
  extends Ids,
    Status,
    Authors,
    Images,
    Content,
    Parents,
    Relationships,
    Taxonomies,
    Rating,
    Sharing,
    Statistics,
    Extras {
  // Ids
  type?: string;
  // Status
  createdAt?: string;
  // Authors
  // Images
  description?: string;
  // Content
  slides?: {
    [slide: string]: Post;
  };
  sku: string;
  unit: string;
  price: number;
  discounted?: number;
  brand?: string;
  birthday?: number | string;
  country?: string;
  upc?: number | string;
  promotion?: string;
  warranty?: string;
  props?: {
    weight?: string;
    dimensions?: string;
    [prop: string]: unknown;
  };
  stockCount?: number;
  soldCount?: number;
  options?: {
    [name: string]: ProductOption;
  };
  variants?: {
    [variant: string]: ProductVariant;
  };
  locale?: string;
  origin?: string;
  // Parents
  // Relationships
  // Taxonomies
  // Rating
  // Sharing
  // Statistics
  keywords?: string;
  // Extras
}

export class ProductService {
  constructor() {}
}
