export interface Ids {
  '#'?: number;
  title?: string;
  $key?: string;
}

export interface Status {
  // blank = 'draft'
  status?: 'draft' | 'published' | 'archived';
}

export interface Authors {
  // John Doe
  // John Doe, Another John
  // { author-1: ..., author-2: ... }
  authors?:
    | string
    | {
        [$key: string]: unknown;
      };
}

export interface Images {
  thumbnail?: string;
  image?: string;
}

export interface Content {
  content?: string;
}

export interface Parents {
  // { bundle-1: ... }
  parents?: {
    [$key: string]: unknown;
  };
}

export interface Relationships {
  // { "posts/post-1": ... }
  relationships?: {
    [to: string]: unknown;
  };
}

export interface Taxonomies {
  // Cat 1
  // Cat 1, Cat 2
  // { cat-1: ..., cat-2: ... }
  categories?:
    | string
    | {
        [$key: string]: unknown;
      };
  // Tag 1
  // Tag 1, Tag 2
  // { tag-1: ..., tag-2: ... }
  tags?:
    | string
    | {
        [$key: string]: unknown;
      };
}

export interface Rating {
  rating?: {
    count: number; // number of rating
    total: number; // number of stars
  };
}

export interface Sharing {
  sharing?: {
    total: number; // all shared
    // facebook, twitter, email, sms, link, ...
    [provider: string]: number;
  };
}

export interface Statistics {
  viewCount?: number;
  likeCount?: number;
  commentCount?: number;
}

export interface Extras {
  meta?: unknown;
}
