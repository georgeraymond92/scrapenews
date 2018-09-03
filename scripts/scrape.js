var request = require('request');
var cheerio = require('cheerio');

var scrape = function() {
    request('http://www.latimes.com', function(err, res, body) {
        // console.log(body);
        var $ = cheerio.load(body);

        // console.log($('.flex-container-column').children('h5').text());
        $('.card-content').children('.flex-container-column').each(function(i, element){
            console.log($(this).children('a').text().trim());
            // console.log($(this).children('a').attr('href'));
            // console.log($(this).children('p').text().trim());
            // console.log($(this).children('p').text().trim());
        });
        // var articles = [];

        // $('.flex-container-column').each(function(i, element) {

        //     var head = $(this)
        //     .children('h5')
        //     .text()
        //     .trim();

        //     var url = $(this)
        //     .children('h5')
        //     .children('a')
        //     .attr('href');


        //     var sum = $(this)
        //     .children('p')
        //     .text()
        //     .trim();

        //     if (head && sum && url) {
                
        //         var headNeat = head.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
        //         var sumNeat = sum.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
                

        //         var dataToAdd = {
        //             headline: headNeat,
        //             summary: sumNeat,
        //             url: url
        //         };
        //         console.log(dataToAdd);

        //         articles.push(dataToAdd);
        //     }

        // });
        // return articles;
    });
};

module.exports = scrape;