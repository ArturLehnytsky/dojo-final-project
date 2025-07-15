import { Page } from '@playwright/test';
import { Header } from '../components/Header';
import { ToastMessages } from '../components/ToastMessages';
import { ChooseWishlistModalPage } from '../modalPages/ChooseWishlistModalPage';
import { DialogModal } from '../modalPages/DialogModal';

export class BasePage {
  protected page: Page;
  header: Header;
  toastMessages: ToastMessages;
  wishlistAddModalPage: ChooseWishlistModalPage;
  wishlistModalPage: DialogModal;

  constructor(page: Page) {
    this.page = page;
    this.header = new Header(page);
    this.toastMessages = new ToastMessages(page);
    this.wishlistAddModalPage = new ChooseWishlistModalPage(page);
    this.wishlistModalPage = new DialogModal(page);
  }
}
