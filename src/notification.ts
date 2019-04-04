export interface Notification {
  '#'?: number;
  $key?: string;

  title: string;

  createdAt?: string;
  link?: string;
  thumbnail?: string;
  content?: string;
  // dynamic
  read?: boolean;
}