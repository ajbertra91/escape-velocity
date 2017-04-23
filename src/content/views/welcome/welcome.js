import {inject} from 'aurelia-framework';
import {quotes} from 'content/config/quotes';
import {christianWorldview} from 'content/config/christian-worldview';
import {getCurrentSlug} from 'content/utilities/helpers';

@inject(Element)
export class Welcome {
  constructor(Element) {
    this.element = Element;
    this.quotes = quotes();
    this.christianWorldview = christianWorldview();
  }
  bind() {
    this.headerQuote = this.quotes.getRandomQuote();
  }
}
