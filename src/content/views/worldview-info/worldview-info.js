import {quotes} from 'content/config/quotes';

export class WorldviewInfo {
    constructor() {
        this.leadQuote = quotes().getQuotesFrom('Michael Wittmer')[0];
    }
    bind() {

    }
}