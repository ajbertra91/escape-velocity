export function quotes() {
    const quotes = [
        {
            text: 'Christians are so concerned to show that they are not narrow or fundamentalist, that they are cultured and sophisticated, that they find something "redemptive" in virtually everything.'
            ,author: 'Nancy Pearcey'
            ,source: 'Saving Leonardo'
        }
        ,{
            text: '[Understanding worldviews] encourages Christians to enjoy the aesthetic qualities of art, while at the same time providing them the tools for critical analysis of the motivating ideas.'
            ,author: 'Nancy Pearcey'
            ,source: 'Saving Leonardo'
        }
        ,{
            text: 'A worldview is a framework of fundamental concepts of beliefs about the world. In short, a worldview comprises the lens through which we see the world.'
            ,author: 'Michael Wittmer'
            ,source: 'Heaven is a Place on Earth, 21.'
        }
        // ,{
        //     text: ''
        //     ,author: ''
        //     ,source: ''
        // }
    ];
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function getRandomQuote() {
        return quotes[getRandomInt(0,quotes.length-1)];
    }
    function getAllQuotes() {
        return quotes;
    }
    function getQuotesFrom(auth) {
        return quotes.filter(q => q.author === auth);
    }
    return {
        getRandomQuote
        ,getAllQuotes
        ,getQuotesFrom
    };
}