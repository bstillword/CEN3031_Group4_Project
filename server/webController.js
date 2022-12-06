const webScraper = require('./webScrapper');
const browserObject = require('./browser');
async function scrapeAll(term){
	try{
		let browser = await browserObject.startBrowser();
		webScraper.search = await term;
		console.log(term)
		let colors = webScraper.scraper(browser);	
		return colors;
	}
	catch(err){
		console.log("Could not resolve the browser instance => ", err);
	}
}

module.exports = (browserInstance) => scrapeAll(browserInstance)