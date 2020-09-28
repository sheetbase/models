import {AudioService} from './services/audio.service';
import {AuthorService} from './services/author.service';
import {BundleService} from './services/bundle.service';
import {CategoryService} from './services/category.service';
import {NotificationService} from './services/notification.service';
import {OptionService} from './services/option.service';
import {OrderService} from './services/order.service';
import {PageService} from './services/page.service';
import {PostService} from './services/post.service';
import {ProductService} from './services/product.service';
import {PromotionService} from './services/promotion.service';
import {PropertyService} from './services/property.service';
import {TagService} from './services/tag.service';
import {ThreadService} from './services/thread.service';
import {UserService} from './services/user.service';
import {VideoService} from './services/video.service';

export class Lib {
  audioService: AudioService;
  authorService: AuthorService;
  bundleService: BundleService;
  categoryService: CategoryService;
  notificationService: NotificationService;
  optionService: OptionService;
  orderService: OrderService;
  pageService: PageService;
  postService: PostService;
  productService: ProductService;
  promotionService: PromotionService;
  propertyService: PropertyService;
  tagService: TagService;
  threadService: ThreadService;
  userService: UserService;
  videoService: VideoService;
  constructor() {
    this.audioService = new AudioService();
    this.authorService = new AuthorService();
    this.bundleService = new BundleService();
    this.categoryService = new CategoryService();
    this.notificationService = new NotificationService();
    this.optionService = new OptionService();
    this.orderService = new OrderService();
    this.pageService = new PageService();
    this.postService = new PostService();
    this.productService = new ProductService();
    this.promotionService = new PromotionService();
    this.propertyService = new PropertyService();
    this.tagService = new TagService();
    this.threadService = new ThreadService();
    this.userService = new UserService();
    this.videoService = new VideoService();
  }
}
