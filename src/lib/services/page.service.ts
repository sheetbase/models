import {Ids, Status, Images, Content, Extras} from '../types/shared.type';

export interface Page extends Ids, Status, Images, Content, Extras {
  // Ids
  type?: string;
  // Status
  createdAt?: string;
  // Images
  excerpt?: string;
  // Content
  locale?: string;
  origin?: string;
  // Extras
}

export class PageService {
  constructor() {}
}
