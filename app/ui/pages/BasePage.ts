import { Page } from '@playwright/test';
import { Header } from '../components/Header';
import { ToastMessages } from '../components/ToastMessages';
import { ChooseWishlistModalPage } from '../modalPages/ChooseWishlistModalPage';
import { WishlistModal } from '../modalPages/WishlistModal';

export class BasePage {
  protected page: Page;
  header: Header;
  toastMessages: ToastMessages;
  wishlistAddModalPage: ChooseWishlistModalPage;
  wishlistModalPage: WishlistModal;

  constructor(page: Page) {
    this.page = page;
    this.header = new Header(page);
    this.toastMessages = new ToastMessages(page);
    this.wishlistAddModalPage = new ChooseWishlistModalPage(page);
    this.wishlistModalPage = new WishlistModal(page);
  }
}
