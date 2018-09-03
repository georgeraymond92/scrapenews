var request = require('request');
var cheerio = require('cheerio');

var scrape = function() {
    request('http://www.latimes.com', function(err, res, body) {
        // console.log(body);
        var $ = cheerio.load(body);
        var articles = [];

        $('.flex-container-column').each(function(i, element){

            var head = '';
            var url = '';
            var sum = '';

            // console.log($(this).children('h5').text().trim());
            if ($(this).children('h5').text().trim().length > 0) {
                head = $(this).children('h5').text().trim();
                // console.log($(this).children('h5').text().trim().length);
                url = $(this).children('h5').children('a').attr('href');
                if ($(this).children('p').text().trim().length > 0) {
                    sum = $(this).children('p').text().trim();
                }
            }
            if (head && sum && url) {
                
                var headNeat = head.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
                var sumNeat = sum.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
                

                var dataToAdd = {
                    headline: headNeat,
                    summary: sumNeat,
                    url: url
                };
                console.log(dataToAdd);

                articles.push(dataToAdd);
            }

        });

        return articles;
    });
};

module.exports = scrape;