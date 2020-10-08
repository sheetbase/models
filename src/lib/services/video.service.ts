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

export interface Video
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
  src?:
    | string
    | {
        [type: string]: unknown; // { mp4: ..., webm: ... }
      };
  duration?: number;
  birthday?: number | string;
  props?: {
    [prop: string]: unknown;
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

export class VideoService {
  constructor() {}
}
