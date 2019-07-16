import { Ids, Images, Taxonomies, Statistics, Extras } from './_shared';
import { Post } from './post';

export interface ProductOption {
  title?: string;
  items: {
    [$key: string]: ProductOptionItem;
  };
}

export interface ProductOptionItem {
  id: string; // unique option id
  title: string;
  value?: string; // color code, ...
  modifier?: number; // original price + this
}

export interface ProductVariant {
  title: string; // Product 1 (XL, Blue)
  sku: string; // product SKU + options ids: P001-XL-B (Product 1, XL, Blue)
  price?: number;
  upc?: string;
  thumbnail?: string;
  image?: string;
  stockCount?: number;
}

export interface ProductRating {
  count: number; // number of rating
  total: number; // number of stars
}

export interface ProductShipping {
  cost?: number; // this cost > class-based cost > 0
  class?: string; // default class
  only?: string | string[]; // only accept these classes
}

// classes: default, free and ...
export interface ProductShippingClass {
  title: string;
  est: string; // estimated time
  logo?: string;
  cost?: number;
}

export interface Product extends Ids, Images, Taxonomies, Statistics, Extras {
  // Ids

  title: string;
  sku: string;
  unit: string;
  price: number;

  createdAt?: string;
  // Images
  description?: string;
  contentSource?: string;
  content?: string;
  slideshow?: Post[];
  discounted?: number;
  type?: string;
  brand?: string;
  birthday?: string;
  country?: string;
  upc?: number | string;
  props?: {
    weight?: number | string; // number = kg; 10lb
    dimensions?: string;
    [prop: string]: any;
  };
  status?: 'instock' | 'outstock' | 'archived';
  stockCount?: number;
  soldCount?: number;
  locale?: string;
  origin?: string;
  options?: {
    [name: string]: ProductOption;
  };
  variants?: {
    [variant: string]: ProductVariant;
  };
  shipping?: string | ProductShipping;
  rating?: ProductRating;
  parents?: {
    [$key: string]: any;
  };
  relationships?: {
    [to: string]: any; // { "posts/post-1": ... }
  };
  keywords?: string;
  // Taxonomies
  // Statistics
  // Extras
}