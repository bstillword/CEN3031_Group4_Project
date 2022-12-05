const scraperObject = {
    search: "lion",
	url: "https://www.color-hex.com/color-palettes/?keyword=",
	async scraper(browser){
		let page = await browser.newPage();
		console.log(`Navigating to ${this.url}${this.search}...`);
		await page.goto(this.url+this.search);
		let palette = await page.$eval("div[class='palettecolordiv']", e => e.getAttribute('style'));
		console.log(JSON.stringify(palette));
        await browser.close();
	}
}
module.exports = scraperObject;