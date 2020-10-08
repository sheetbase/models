import {Ids, Images, Extras} from '../types/shared.type';

export interface Category extends Ids, Images, Extras {
  // Ids
  // Images
  description?: string;
  count?: number;
  only?: string;
  locale?: string;
  origin?: string;
  // Extras
}

export class CategoryService {
  constructor() {}
}
