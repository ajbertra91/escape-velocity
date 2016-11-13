import {inject} from 'aurelia-framework';
import {quotes} from 'content/config/quotes'
import {features} from 'content/config/features'

@inject(Element)
export class Welcome {
  constructor(Element) {
    this.element = Element;
    this.quotes = quotes();
    this.features = features().features;
  }
  bind() {
    this.headerQuote = this.quotes.getRandomQuote();
  }
}
