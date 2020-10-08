import {Ids, Extras} from '../types/shared.type';

export interface Promotion extends Ids, Extras {
  // Ids
  content?: string;
  value?: number;
  kind?: string;
  locale?: string;
  origin?: string;
  // Extras
}

export class PromotionService {
  constructor() {}
}
