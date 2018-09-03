var db = require('../models');
var scrape = require('../scripts/scrape');

module.exports = {
    scrapeHeadlines: function(req, res) {
        console.log('hello');
        return scrape()
        .then(function(articles) {
            return db.Headline.create(articles);
        })
        .then(function(dbHeadline) {
            if (dbHeadline.length === 0) {
                console.log('test');
                res.json({
                    message: "Sorry there are no new articles today. Check back tomorrow!"
                });
            }
            else {
                res.json({
                    message: "Added " + dbHeadline.length + "new articles!!"
                });
            }
        })
        .catch(function(err) {
            res.json({
                message: "Scrape complete!!"
            });
        });
    }
};