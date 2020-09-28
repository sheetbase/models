import {
  Ids,
  Status,
  Images,
  Content,
  Taxonomies,
  Rating,
  Sharing,
  Statistics,
  Extras,
} from '../types';

export interface Author
  extends Ids,
    Status,
    Images,
    Content,
    Taxonomies,
    Rating,
    Sharing,
    Statistics,
    Extras {
  // Ids
  type?: string;
  // Status
  createdAt?: string;
  // Images
  description?: string;
  // Content
  email?: string;
  phoneNumber?: number | string;
  url?: string;
  stats?: {
    [prop: string]: any;
  };
  locale?: string;
  origin?: string;
  // Taxonomies
  // Rating
  // Sharing
  // Statistics
  keywords?: string;
  // Extras
}

export class AuthorService {
  constructor() {}
}
